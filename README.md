* {
  box-sizing: border-box;
}

:root {
  --bg: #081120;
  --panel: rgba(13, 24, 40, 0.82);
  --panel-strong: rgba(17, 29, 49, 0.98);
  --surface: #101f34;
  --surface-soft: #edf5ff;
  --primary: #5eead4;
  --secondary: #7c9cff;
  --accent: #a78bfa;
  --text: #ebf3ff;
  --muted: #a8bdd8;
  --success: #32d583;
  --warning: #ffb703;
  --danger: #ff6b6b;
  --border: rgba(162, 180, 205, 0.18);
  --shadow: 0 30px 80px rgba(12, 18, 31, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(124, 156, 255, 0.25), transparent 30%),
    radial-gradient(circle at top right, rgba(94, 234, 212, 0.18), transparent 25%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 24px 40px;
}

.topbar,
.hero,
.metrics-grid,
.feature-section,
.pricing-section,
.dashboard-section,
.footer {
  max-width: 1200px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 32px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #061018;
  font-weight: 800;
}

.brand-name {
  font-weight: 700;
}

.brand-tag {
  color: var(--muted);
  font-size: 0.75rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
}

.ghost-btn,
.secondary-btn,
.plan-btn,
.primary-btn {
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.ghost-btn,
.secondary-btn {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 12px 18px;
}

.primary-btn,
.plan-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #07141f;
  border: none;
  padding: 14px 22px;
  font-weight: 700;
  box-shadow: 0 18px 32px rgba(94, 234, 212, 0.24);
}

.primary-btn.small {
  padding: 12px 16px;
  font-size: 0.92rem;
}

.ghost-btn:hover,
.secondary-btn:hover,
.primary-btn:hover,
.plan-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 32px;
  padding: 28px 0 18px;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 8px 12px;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
  border: 1px solid rgba(94, 234, 212, 0.27);
  border-radius: 999px;
  background: rgba(94, 234, 212, 0.08);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 18px 0 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.social-proof {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
}

.social-proof div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.social-proof strong {
  font-size: 1.2rem;
}

.social-proof span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.panel-card,
.mini-panel,
.metric-box,
.feature-card,
.pricing-card,
.panel,
.custom-plan-box {
  background: rgba(10, 17, 28, 0.76);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 28px;
}

.stat-label {
  color: var(--muted);
}

.stat-value {
  margin-top: 12px;
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
}

.trend {
  display: inline-block;
  margin-top: 16px;
  font-size: 0.78rem;
  padding: 8px 10px;
  border-radius: 10px;
}

.trend.up {
  background: rgba(50, 213, 131, 0.14);
  color: #8ff0be;
}

.mini-panel {
  padding: 22px;
}

.mini-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
}

.badge {
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.72rem;
}

.badge.success {
  background: rgba(50, 213, 131, 0.13);
  color: #7fe7b0;
}

.bar-stack {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.8rem;
}

.bar {
  flex: 1;
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 32px;
}

.metric-box {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.metric-title {
  color: var(--muted);
}

.metric-box strong {
  font-size: clamp(1.8rem, 3vw, 2.2rem);
}

.metric-box small {
  color: var(--muted);
}

.feature-section,
.pricing-section,
.dashboard-section {
  padding-top: 100px;
}

.section-heading {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 26px;
}

.section-heading.left {
  margin-left: 0;
  text-align: left;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3rem);
  letter-spacing: -0.04em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.feature-card {
  padding: 28px 22px;
}

.feature-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 1.6rem;
  background: rgba(124, 156, 255, 0.14);
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.feature-card p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.pricing-card {
  position: relative;
  padding: 28px 22px;
  border: 1px solid var(--border);
}

.pricing-card.featured {
  background: linear-gradient(180deg, rgba(94, 234, 212, 0.08), rgba(12, 18, 31, 0.86));
  border-color: rgba(94, 234, 212, 0.3);
}

.popular-label {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 7px 10px;
  font-size: 0.72rem;
  border-radius: 999px;
  color: #1c2d24;
  background: var(--primary);
}

.pricing-card h3 {
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 1.7rem;
}

.pricing-card p {
  color: var(--muted);
  line-height: 1.6;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin: 18px 0 8px;
}

.currency {
  font-size: 1.4rem;
  color: var(--muted);
}

.price {
  font-size: 3rem;
  font-weight: 800;
}

.period {
  color: var(--muted);
}

.trial-copy {
  color: var(--primary);
  font-size: 0.85rem;
  margin-bottom: 16px;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.pricing-card li::before {
  content: '✓';
  color: var(--primary);
  margin-right: 8px;
}

.plan-btn {
  width: 100%;
}

.custom-plan-box {
  margin-top: 28px;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.custom-plan-box h3 {
  margin: 0 0 8px;
}

.custom-plan-box p {
  margin: 0;
  color: var(--muted);
}

.custom-plan-form {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.custom-plan-form input {
  width: 180px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
}

.panel {
  padding: 22px;
}

.panel h3 {
  margin-top: 0;
  margin-bottom: 18px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid var(--border);
  padding: 14px 10px;
  text-align: left;
}

th {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 86px;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
}

.status-pill.healthy {
  background: rgba(50, 213, 131, 0.12);
  color: #88efbb;
}

.status-pill.low {
  background: rgba(255, 183, 3, 0.12);
  color: #ffe07d;
}

.status-pill.critical {
  background: rgba(255, 107, 107, 0.1);
  color: #ffb3b3;
}

.insight-summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.insight-summary div {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.insight-summary span {
  color: var(--muted);
  display: block;
  font-size: 0.74rem;
  margin-bottom: 6px;
}

.recommendation-list {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  display: grid;
  gap: 10px;
  line-height: 1.6;
}

.alert-stack {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.alert-box {
  border: 1px solid var(--border);
  background: rgba(124, 156, 255, 0.05);
  border-radius: 14px;
  padding: 14px 16px;
}

.alert-box strong {
  display: block;
  margin-bottom: 8px;
}

.alert-box p {
  margin: 0;
  color: var(--muted);
}

.footer {
  padding-top: 42px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  color: var(--muted);
}

.footer strong {
  color: var(--text);
  margin-right: 12px;
}

.checkout-note {
  color: var(--primary);
}

@media (max-width: 940px) {
  .hero,
  .dashboard-grid,
  .feature-grid,
  .pricing-grid,
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .topbar,
  .custom-plan-box,
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    flex-wrap: wrap;
  }
}
