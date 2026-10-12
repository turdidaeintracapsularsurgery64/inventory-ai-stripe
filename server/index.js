import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams and lean inventories.',
    amount: 29,
    trialDays: 10,
    features: ['Unlimited products', 'Low-stock alerts', 'AI insights dashboard'],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For scaling businesses that need more control.',
    amount: 79,
    trialDays: 10,
    features: ['Advanced forecasting', 'Multi-location tracking', 'Priority support'],
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Built for operations that run across multiple channels.',
    amount: 149,
    trialDays: 10,
    features: ['Custom automations', 'Executive reporting', 'Dedicated onboarding'],
  },
];

const inventory = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    sku: 'AUX-204',
    category: 'Electronics',
    stock: 24,
    minStock: 15,
    reorderPoint: 18,
    unitPrice: 79,
    sales: 42,
    trend: '+12.5%',
    status: 'Healthy',
  },
  {
    id: 2,
    name: 'Leather Notebook',
    sku: 'STN-118',
    category: 'Office',
    stock: 8,
    minStock: 12,
    reorderPoint: 15,
    unitPrice: 24,
    sales: 36,
    trend: '+9.8%',
    status: 'Low',
  },
  {
    id: 3,
    name: 'Organic Coffee Beans',
    sku: 'BVR-334',
    category: 'Food',
    stock: 31,
    minStock: 18,
    reorderPoint: 20,
    unitPrice: 18,
    sales: 27,
    trend: '+7.2%',
    status: 'Healthy',
  },
  {
    id: 4,
    name: 'Smart Thermostat',
    sku: 'HOME-750',
    category: 'Home',
    stock: 11,
    minStock: 16,
    reorderPoint: 18,
    unitPrice: 129,
    sales: 29,
    trend: '+18.3%',
    status: 'Critical',
  },
  {
    id: 5,
    name: 'Running Shoes',
    sku: 'FIT-902',
    category: 'Apparel',
    stock: 27,
    minStock: 14,
    reorderPoint: 18,
    unitPrice: 96,
    sales: 31,
    trend: '+4.6%',
    status: 'Healthy',
  },
];

const metrics = {
  totalProducts: inventory.length,
  availableStock: inventory.reduce((sum, item) => sum + item.stock, 0),
  lowStockItems: inventory.filter((item) => item.stock <= item.minStock).length,
  revenueThisMonth: inventory.reduce((sum, item) => sum + item.stock * item.unitPrice * 0.72, 0),
};

function createInsights() {
  const lowStocks = inventory.filter((item) => item.stock <= item.minStock);
  const bestSeller = [...inventory].sort((a, b) => b.sales - a.sales)[0];

  const alerts = lowStocks.map((item) => ({
    type: 'restock',
    title: `${item.name} needs reordering`,
    detail: `Only ${item.stock} units left. Recommended reorder quantity: ${item.reorderPoint + 10}.`,
  }));

  if (lowStocks.length === 0) {
    alerts.push({
      type: 'healthy',
      title: 'Stock levels are stable',
      detail: 'Your current inventory is well balanced across the top-selling categories.',
    });
  }

  return {
    summary: {
      revenueForecast: Math.round(metrics.revenueThisMonth * 1.11),
      reorderValue: inventory.reduce((sum, item) => sum + item.reorderPoint * item.unitPrice, 0),
      serviceLevel: 97,
    },
    bestSeller,
    alerts,
    recommendations: [
      `Increase reorder quantity for ${lowStocks[0]?.name || 'top performers'} before the next sales spike.`,
      `Promote the ${bestSeller.name} bundle to offset rising demand and improve turnover rate.`,
      'Consider smart automation for replenishment to avoid stockouts in your highest-volume categories.',
    ],
  };
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mode: stripe ? 'live' : 'demo' });
});

app.get('/api/plans', (req, res) => {
  res.json({ plans, trialDays: 10 });
});

app.post('/api/plans/custom', (req, res) => {
  const { amount, name } = req.body || {};
  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: 'A valid monthly amount is required.' });
  }

  const customPlan = {
    id: `custom-${Date.now()}`,
    name: name || 'Custom plan',
    description: 'A tailored monthly subscription for your business.',
    amount: Number(amount),
    trialDays: 10,
    features: ['Fully customizable billing', 'AI stock planning', 'Priority dashboards'],
  };

  plans.push(customPlan);
  res.json({ plan: customPlan, plans });
});

app.get('/api/inventory', (req, res) => {
  res.json({ items: inventory, metrics });
});

app.get('/api/dashboard', (req, res) => {
  res.json({
    metrics,
    insights: createInsights(),
    items: inventory,
  });
});

app.post('/api/checkout', async (req, res) => {
  const { planId, email } = req.body || {};
  const selectedPlan = plans.find((plan) => plan.id === planId) || plans[0];

  if (!stripe) {
    return res.json({
      ok: true,
      demo: true,
      subscription: {
        id: `demo_${Date.now()}`,
        status: 'trialing',
        email: email || 'demo@inventoryai.app',
        plan: selectedPlan.name,
        amount: selectedPlan.amount,
        trialDays: 10,
      },
      message: `Demo checkout created for ${selectedPlan.name}. Trial started for 10 days.`,
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            recurring: { interval: 'month' },
            product_data: {
              name: selectedPlan.name,
              description: `${selectedPlan.description} with a 10-day free trial.`,
            },
            unit_amount: selectedPlan.amount * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/?checkout=success`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/?checkout=cancelled`,
      metadata: { planId: selectedPlan.id, trialDays: '10' },
      subscription_data: {
        trial_period_days: 10,
      },
    });

    res.json({ ok: true, url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unable to create Stripe checkout session.' });
  }
});

app.get('/api/ai-insights', (req, res) => {
  res.json(createInsights());
});

app.listen(port, () => {
  console.log(`Inventory AI API running on http://localhost:${port}`);
});
