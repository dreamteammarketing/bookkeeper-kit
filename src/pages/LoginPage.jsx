import React, { useState } from 'react';
import { BRAND, COLORS } from '../data.js';

export default function LoginPage({ onNavigate, onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function validate() {
    const e = {};
    if (!form.email.trim()) e.email = 'Email is required';
    if (!form.password) e.password = 'Password is required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onLogin(form);
    }
  }

  const s = {
    page: { minHeight: '100vh', background: COLORS.bg, color: COLORS.textPrimary, fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' },
    nav: { background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${COLORS.border}`, padding: '0 24px' },
    navInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: COLORS.gold, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' },
    backBtn: { background: 'none', border: 'none', color: COLORS.textSecondary, fontSize: 14, cursor: 'pointer' },
    center: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' },
    card: { width: '100%', maxWidth: 420, background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 40 },
    title: { fontFamily: "'Oswald', sans-serif", fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 8, textTransform: 'uppercase' },
    subtitle: { fontSize: 14, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 32 },
    fieldGroup: { marginBottom: 20 },
    label: { display: 'block', fontSize: 13, fontWeight: 600, color: COLORS.textSecondary, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 },
    input: { width: '100%', padding: '12px 16px', background: '#1a1a1a', border: `1px solid ${COLORS.borderLight}`, borderRadius: 10, color: COLORS.textPrimary, fontSize: 15, outline: 'none', fontFamily: "'Inter', sans-serif" },
    inputError: { borderColor: '#EF4444' },
    errorText: { fontSize: 12, color: '#EF4444', marginTop: 4 },
    passwordWrap: { position: 'relative' },
    showBtn: { position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: COLORS.textMuted, fontSize: 13, cursor: 'pointer' },
    submitBtn: { width: '100%', padding: '14px 0', background: COLORS.gold, color: '#0a0a0a', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, marginTop: 8, transition: 'all 0.3s' },
    signupLink: { textAlign: 'center', marginTop: 20, fontSize: 14, color: COLORS.textSecondary },
    signupBtn: { background: 'none', border: 'none', color: COLORS.gold, fontSize: 14, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' },
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navInner}>
          <div style={s.logo} onClick={() => onNavigate('landing')}>{BRAND.name}</div>
          <button style={s.backBtn} onClick={() => onNavigate('landing')}>&#8592; Back</button>
        </div>
      </nav>

      <div style={s.center}>
        <div style={s.card}>
          <h1 style={s.title}>Welcome Back</h1>
          <p style={s.subtitle}>Log in to access your membership</p>
          <form onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button type="button" style={s.showBtn} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <div style={s.errorText}>{errors.password}</div>}
            </div>

            <button type="submit" style={s.submitBtn}>Log In</button>
          </form>
          <div style={s.signupLink}>
            Don't have an account? <button style={s.signupBtn} onClick={() => onNavigate('signup')}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
