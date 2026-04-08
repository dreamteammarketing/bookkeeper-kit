import React, { useState } from 'react';
import { BRAND, COLORS, TIERS } from '../data.js';

export default function SignUpPage({ onNavigate, selectedTier, onSignUp }) {
  const [activeTier, setActiveTier] = useState(selectedTier || 'supporter');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const tier = TIERS.find((t) => t.id === activeTier) || TIERS[2];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Minimum 8 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSignUp({ ...form, tier: activeTier });
    }
  }

  const s = {
    page: { minHeight: '100vh', background: COLORS.bg, color: COLORS.textPrimary, fontFamily: "'Inter', sans-serif" },
    nav: { position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${COLORS.border}`, padding: '0 24px' },
    navInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: COLORS.gold, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' },
    backBtn: { background: 'none', border: 'none', color: COLORS.textSecondary, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 },
    container: { maxWidth: 960, margin: '0 auto', padding: '48px 24px 80px' },
    title: { fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, textAlign: 'center', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
    subtitle: { fontSize: 15, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 48 },
    // TIER SELECTOR
    tierSelector: { display: 'flex', gap: 8, marginBottom: 40, overflowX: 'auto', paddingBottom: 8 },
    tierTab: (t, active) => ({
      flex: '1 1 0',
      minWidth: 140,
      padding: '16px 12px',
      background: active ? COLORS.bgCardHover : COLORS.bgCard,
      border: `2px solid ${active ? t.color : COLORS.border}`,
      borderRadius: 12,
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'all 0.3s',
    }),
    tierTabName: (color) => ({ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }),
    tierTabPrice: { fontSize: 20, fontWeight: 800 },
    // LAYOUT
    layout: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' },
    // FORM
    formCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32 },
    formTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 24, textTransform: 'uppercase' },
    fieldGroup: { marginBottom: 20 },
    label: { display: 'block', fontSize: 13, fontWeight: 600, color: COLORS.textSecondary, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 },
    input: { width: '100%', padding: '12px 16px', background: '#1a1a1a', border: `1px solid ${COLORS.borderLight}`, borderRadius: 10, color: COLORS.textPrimary, fontSize: 15, outline: 'none', transition: 'border 0.2s', fontFamily: "'Inter', sans-serif" },
    inputError: { borderColor: '#EF4444' },
    errorText: { fontSize: 12, color: '#EF4444', marginTop: 4 },
    passwordWrap: { position: 'relative' },
    showBtn: { position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: COLORS.textMuted, fontSize: 13, cursor: 'pointer' },
    submitBtn: (color) => ({
      width: '100%',
      padding: '16px 0',
      background: color,
      color: '#0a0a0a',
      border: 'none',
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginTop: 8,
      transition: 'all 0.3s',
      boxShadow: `0 4px 16px ${color}33`,
    }),
    loginLink: { textAlign: 'center', marginTop: 16, fontSize: 14, color: COLORS.textSecondary },
    loginBtn: { background: 'none', border: 'none', color: COLORS.gold, fontSize: 14, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' },
    // SUMMARY
    summaryCard: { background: COLORS.bgCard, border: `1px solid ${tier.color}44`, borderRadius: 16, padding: 32 },
    summaryTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: tier.color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
    summaryPrice: { fontSize: 32, fontWeight: 800, marginBottom: 4 },
    summaryPer: { fontSize: 13, color: COLORS.textMuted, marginBottom: 24 },
    summaryDivider: { height: 1, background: COLORS.border, margin: '0 0 20px' },
    featureItem: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
    featureCheck: { color: tier.color, fontSize: 14, marginTop: 2, flexShrink: 0 },
    featureText: { fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.4 },
    guarantee: { marginTop: 24, padding: 16, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 10, fontSize: 13, color: COLORS.success, textAlign: 'center', lineHeight: 1.5 },
  };

  // Responsive: stack on small screens
  const responsiveLayout = typeof window !== 'undefined' && window.innerWidth < 768
    ? { ...s.layout, gridTemplateColumns: '1fr' }
    : s.layout;

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navInner}>
          <div style={s.logo} onClick={() => onNavigate('landing')}>{BRAND.name}</div>
          <button style={s.backBtn} onClick={() => onNavigate('landing')}>
            &#8592; Back
          </button>
        </div>
      </nav>

      <div style={s.container}>
        <h1 style={s.title}>Create Your Account</h1>
        <p style={s.subtitle}>Select your membership tier and get started</p>

        {/* TIER SELECTOR */}
        <div style={s.tierSelector}>
          {TIERS.map((t) => (
            <button key={t.id} style={s.tierTab(t, activeTier === t.id)} onClick={() => setActiveTier(t.id)}>
              <div style={s.tierTabName(t.color)}>{t.name}</div>
              <div style={s.tierTabPrice}>{t.price === 0 ? 'Free' : `$${t.price}`}</div>
            </button>
          ))}
        </div>

        {/* FORM + SUMMARY */}
        <div style={responsiveLayout}>
          <div style={s.formCard}>
            <div style={s.formTitle}>Your Details</div>
            <form onSubmit={handleSubmit}>
              <div style={s.fieldGroup}>
                <label style={s.label}>Full Name</label>
                <input
                  style={{ ...s.input, ...(errors.name ? s.inputError : {}) }}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <div style={s.errorText}>{errors.name}</div>}
              </div>

              <div style={s.fieldGroup}>
                <label style={s.label}>Email</label>
                <input
                  style={{ ...s.input, ...(errors.email ? s.inputError : {}) }}
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <div style={s.errorText}>{errors.email}</div>}
              </div>

              <div style={s.fieldGroup}>
                <label style={s.label}>Password</label>
                <div style={s.passwordWrap}>
                  <input
                    style={{ ...s.input, ...(errors.password ? s.inputError : {}), paddingRight: 60 }}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Minimum 8 characters"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button type="button" style={s.showBtn} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <div style={s.errorText}>{errors.password}</div>}
              </div>

              <div style={s.fieldGroup}>
                <label style={s.label}>Confirm Password</label>
                <input
                  style={{ ...s.input, ...(errors.confirm ? s.inputError : {}) }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  value={form.confirm}
                  onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                />
                {errors.confirm && <div style={s.errorText}>{errors.confirm}</div>}
              </div>

              <button type="submit" style={s.submitBtn(tier.color)}>
                {tier.price === 0 ? 'Create Free Account' : `Subscribe — ${tier.priceLabel}`}
              </button>
            </form>
            <div style={s.loginLink}>
              Already a member? <button style={s.loginBtn} onClick={() => onNavigate('login')}>Log in</button>
            </div>
          </div>

          {/* SUMMARY */}
          <div style={s.summaryCard}>
            <div style={s.summaryTitle}>{tier.name}</div>
            <div style={s.summaryPrice}>{tier.price === 0 ? 'Free' : `$${tier.price}`}</div>
            <div style={s.summaryPer}>{tier.price === 0 ? 'No credit card required' : 'per month, cancel anytime'}</div>
            <div style={s.summaryDivider} />
            <div>
              {tier.features.map((f, i) => (
                <div key={i} style={s.featureItem}>
                  <span style={s.featureCheck}>&#10003;</span>
                  <span style={s.featureText}>{f}</span>
                </div>
              ))}
            </div>
            <div style={s.guarantee}>
              No contracts. No commitments. Cancel anytime with one click.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
