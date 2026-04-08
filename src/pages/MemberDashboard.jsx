import React, { useState } from 'react';
import { BRAND, COLORS, TIERS } from '../data.js';

export default function MemberDashboard({ member, onNavigate, onLogout, onUpgrade }) {
  const [showUpgrade, setShowUpgrade] = useState(false);

  const currentTier = TIERS.find((t) => t.id === member.tier) || TIERS[0];
  const currentIndex = TIERS.findIndex((t) => t.id === member.tier);
  const upgradeTiers = TIERS.slice(currentIndex + 1);

  const quickLinks = [
    { label: 'Stream Music', icon: '🎵', desc: currentTier.id === 'listener' ? 'Standard quality' : 'Lossless FLAC quality' },
    { label: 'Downloads', icon: '⬇️', desc: currentTier.id === 'listener' ? 'Upgrade to access' : currentTier.id === 'fan' ? '2 downloads/month' : 'Unlimited downloads' },
    { label: 'Merch Store', icon: '🛍️', desc: currentTier.id === 'listener' ? 'No discount' : currentTier.id === 'fan' ? '10% discount active' : currentTier.id === 'supporter' ? '25% discount active' : '40% discount active' },
    { label: 'Community', icon: '💬', desc: currentTier.id === 'inner-circle' ? 'Private channel access' : 'Community forum access' },
    { label: 'Exclusive Content', icon: '🔓', desc: ['listener', 'fan'].includes(currentTier.id) ? (currentTier.id === 'fan' ? 'Early access enabled' : 'Upgrade to access') : 'Full access unlocked' },
    { label: 'Events', icon: '🎤', desc: currentTier.id === 'inner-circle' ? 'Meet & greet + coaching' : 'Upgrade for exclusive events' },
  ];

  const s = {
    page: { minHeight: '100vh', background: COLORS.bg, color: COLORS.textPrimary, fontFamily: "'Inter', sans-serif" },
    nav: { position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${COLORS.border}`, padding: '0 24px' },
    navInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: COLORS.gold, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' },
    navRight: { display: 'flex', alignItems: 'center', gap: 16 },
    navUser: { fontSize: 14, color: COLORS.textSecondary },
    logoutBtn: { background: 'none', border: `1px solid ${COLORS.borderLight}`, color: COLORS.textSecondary, fontSize: 13, padding: '6px 16px', borderRadius: 8, cursor: 'pointer' },
    container: { maxWidth: 1000, margin: '0 auto', padding: '40px 24px 80px' },
    // WELCOME
    welcomeCard: { background: `linear-gradient(135deg, ${currentTier.color}15 0%, ${COLORS.bgCard} 60%)`, border: `1px solid ${currentTier.color}33`, borderRadius: 20, padding: 40, marginBottom: 32 },
    welcomeTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 },
    welcomeGreeting: { fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, textTransform: 'uppercase' },
    tierBadge: { display: 'inline-flex', alignItems: 'center', gap: 8, background: `${currentTier.color}20`, border: `1px solid ${currentTier.color}44`, padding: '8px 20px', borderRadius: 20 },
    tierBadgeDot: { width: 10, height: 10, borderRadius: '50%', background: currentTier.color },
    tierBadgeText: { fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, color: currentTier.color, textTransform: 'uppercase', letterSpacing: 1 },
    welcomeSub: { fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.6 },
    // QUICK LINKS
    sectionTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 },
    quickGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40 },
    quickCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24, cursor: 'pointer', transition: 'all 0.3s' },
    quickIcon: { fontSize: 28, marginBottom: 10 },
    quickLabel: { fontSize: 16, fontWeight: 700, marginBottom: 4 },
    quickDesc: { fontSize: 13, color: COLORS.textSecondary },
    // BENEFITS
    benefitsCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32, marginBottom: 32 },
    featureRow: { display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: `1px solid ${COLORS.border}` },
    featureCheck: { color: currentTier.color, fontSize: 16, marginTop: 2, flexShrink: 0 },
    featureText: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.4 },
    // UPGRADE
    upgradeCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.gold}33`, borderRadius: 16, padding: 32, textAlign: 'center', marginBottom: 32 },
    upgradeTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' },
    upgradeSub: { fontSize: 14, color: COLORS.textSecondary, marginBottom: 24, lineHeight: 1.6 },
    upgradeGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 },
    upgradeOption: (t) => ({
      background: '#1a1a1a',
      border: `2px solid ${t.color}44`,
      borderRadius: 12,
      padding: 24,
      cursor: 'pointer',
      transition: 'all 0.3s',
      textAlign: 'center',
    }),
    upgradeOptionName: (color) => ({ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 600, color, textTransform: 'uppercase', marginBottom: 4 }),
    upgradeOptionPrice: { fontSize: 24, fontWeight: 800, marginBottom: 12 },
    upgradeBtn: (color) => ({
      display: 'inline-block',
      padding: '10px 24px',
      background: color,
      color: '#0a0a0a',
      border: 'none',
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: 1,
    }),
    // ACCOUNT
    accountCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32 },
    accountRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: `1px solid ${COLORS.border}` },
    accountLabel: { fontSize: 13, color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: 1 },
    accountValue: { fontSize: 14, fontWeight: 500 },
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navInner}>
          <div style={s.logo}>{BRAND.name}</div>
          <div style={s.navRight}>
            <span style={s.navUser}>{member.name}</span>
            <button style={s.logoutBtn} onClick={onLogout}>Log Out</button>
          </div>
        </div>
      </nav>

      <div style={s.container}>
        {/* WELCOME */}
        <div style={s.welcomeCard}>
          <div style={s.welcomeTop}>
            <div>
              <div style={s.welcomeGreeting}>Welcome back, {member.name.split(' ')[0]}</div>
            </div>
            <div style={s.tierBadge}>
              <div style={s.tierBadgeDot} />
              <div style={s.tierBadgeText}>{currentTier.name}</div>
            </div>
          </div>
          <div style={s.welcomeSub}>
            You're a {currentTier.name} member. {currentTier.id === 'inner-circle'
              ? "You have access to everything Way Raps has to offer."
              : `Upgrade to unlock even more exclusive perks and experiences.`}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={s.sectionTitle}>Quick Access</div>
        <div style={s.quickGrid}>
          {quickLinks.map((link, i) => (
            <div key={i} style={s.quickCard}>
              <div style={s.quickIcon}>{link.icon}</div>
              <div style={s.quickLabel}>{link.label}</div>
              <div style={s.quickDesc}>{link.desc}</div>
            </div>
          ))}
        </div>

        {/* YOUR BENEFITS */}
        <div style={s.sectionTitle}>Your Benefits</div>
        <div style={s.benefitsCard}>
          {currentTier.features.map((f, i) => (
            <div key={i} style={{ ...s.featureRow, ...(i === currentTier.features.length - 1 ? { borderBottom: 'none' } : {}) }}>
              <span style={s.featureCheck}>&#10003;</span>
              <span style={s.featureText}>{f}</span>
            </div>
          ))}
        </div>

        {/* UPGRADE */}
        {upgradeTiers.length > 0 && (
          <>
            <div style={s.sectionTitle}>Level Up</div>
            <div style={s.upgradeCard}>
              <div style={s.upgradeTitle}>Unlock More</div>
              <div style={s.upgradeSub}>Upgrade your membership to access exclusive features, bigger discounts, and VIP experiences.</div>
              <div style={s.upgradeGrid}>
                {upgradeTiers.map((t) => (
                  <div key={t.id} style={s.upgradeOption(t)}>
                    <div style={s.upgradeOptionName(t.color)}>{t.name}</div>
                    <div style={s.upgradeOptionPrice}>${t.price}</div>
                    <button style={s.upgradeBtn(t.color)} onClick={() => onUpgrade(t.id)}>
                      Upgrade
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ACCOUNT INFO */}
        <div style={s.sectionTitle}>Account</div>
        <div style={s.accountCard}>
          <div style={s.accountRow}>
            <span style={s.accountLabel}>Name</span>
            <span style={s.accountValue}>{member.name}</span>
          </div>
          <div style={s.accountRow}>
            <span style={s.accountLabel}>Email</span>
            <span style={s.accountValue}>{member.email}</span>
          </div>
          <div style={s.accountRow}>
            <span style={s.accountLabel}>Membership</span>
            <span style={{ ...s.accountValue, color: currentTier.color }}>{currentTier.name}</span>
          </div>
          <div style={{ ...s.accountRow, borderBottom: 'none' }}>
            <span style={s.accountLabel}>Billing</span>
            <span style={s.accountValue}>{currentTier.price === 0 ? 'Free' : `${currentTier.priceLabel}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
