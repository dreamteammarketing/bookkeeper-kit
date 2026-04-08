import React, { useState } from 'react';
import { BRAND, COLORS, TIERS, FEATURES_HIGHLIGHT, TESTIMONIALS, FAQ } from '../data.js';

export default function LandingPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const s = {
    page: { minHeight: '100vh', background: COLORS.bg, color: COLORS.textPrimary, fontFamily: "'Inter', sans-serif" },
    // NAV
    nav: { position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${COLORS.border}`, padding: '0 24px' },
    navInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: COLORS.gold, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' },
    navLinks: { display: 'flex', gap: 8, alignItems: 'center' },
    navLink: { background: 'none', border: 'none', color: COLORS.textSecondary, fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '8px 16px', borderRadius: 8, transition: 'all 0.2s' },
    navCta: { background: COLORS.gold, color: '#0a0a0a', border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '8px 20px', borderRadius: 8, transition: 'all 0.2s' },
    // HERO
    hero: { maxWidth: 1200, margin: '0 auto', padding: '100px 24px 80px', textAlign: 'center' },
    heroBadge: { display: 'inline-block', background: 'rgba(212,175,55,0.1)', border: `1px solid rgba(212,175,55,0.3)`, color: COLORS.gold, fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 20, marginBottom: 24, letterSpacing: 1, textTransform: 'uppercase' },
    heroTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24, textTransform: 'uppercase', letterSpacing: -1 },
    heroAccent: { color: COLORS.gold },
    heroSub: { fontSize: 'clamp(16px, 2vw, 20px)', color: COLORS.textSecondary, maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 300 },
    heroCta: { display: 'inline-block', background: COLORS.gold, color: '#0a0a0a', fontSize: 16, fontWeight: 700, padding: '16px 48px', borderRadius: 12, border: 'none', cursor: 'pointer', letterSpacing: 1, textTransform: 'uppercase', transition: 'all 0.3s', boxShadow: '0 4px 24px rgba(212,175,55,0.3)' },
    heroStats: { display: 'flex', justifyContent: 'center', gap: 48, marginTop: 64, flexWrap: 'wrap' },
    stat: { textAlign: 'center' },
    statNum: { fontFamily: "'Oswald', sans-serif", fontSize: 36, fontWeight: 700, color: COLORS.gold },
    statLabel: { fontSize: 13, color: COLORS.textMuted, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 },
    // SECTION
    section: { maxWidth: 1200, margin: '0 auto', padding: '80px 24px' },
    sectionAlt: { background: COLORS.bgSection },
    sectionTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, textAlign: 'center', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 },
    sectionSub: { fontSize: 16, color: COLORS.textSecondary, textAlign: 'center', maxWidth: 600, margin: '0 auto 56px', lineHeight: 1.6 },
    // TIERS
    tiersGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, maxWidth: 1200, margin: '0 auto' },
    tierCard: (tier, hover) => ({
      background: hover ? COLORS.bgCardHover : COLORS.bgCard,
      border: `1px solid ${tier.popular ? tier.color : COLORS.border}`,
      borderRadius: 16,
      padding: 32,
      position: 'relative',
      transition: 'all 0.3s',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: tier.popular ? `0 8px 32px rgba(139,92,246,0.15)` : 'none',
    }),
    tierPopular: { position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: COLORS.tierSupporter, color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 12, textTransform: 'uppercase', letterSpacing: 1 },
    tierName: (color) => ({ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }),
    tierPrice: { fontSize: 36, fontWeight: 800, marginBottom: 4 },
    tierDesc: { fontSize: 14, color: COLORS.textSecondary, marginBottom: 24, lineHeight: 1.5 },
    tierFeature: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 },
    tierCheck: (color) => ({ color, fontSize: 16, marginTop: 2, flexShrink: 0 }),
    tierFeatureText: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.4 },
    tierCta: (color) => ({ width: '100%', padding: '14px 0', border: `2px solid ${color}`, background: 'transparent', color, fontSize: 14, fontWeight: 700, borderRadius: 10, cursor: 'pointer', marginTop: 24, textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.3s' }),
    // FEATURES
    featuresGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, maxWidth: 1200, margin: '0 auto' },
    featureCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32, transition: 'all 0.3s' },
    featureIcon: { fontSize: 32, marginBottom: 16 },
    featureTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8 },
    featureDesc: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.6 },
    // TESTIMONIALS
    testGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1200, margin: '0 auto' },
    testCard: { background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 32 },
    testQuote: { fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' },
    testAuthor: { display: 'flex', alignItems: 'center', gap: 12 },
    testAvatar: (tier) => {
      const color = tier === 'The Inner Circle' ? COLORS.tierInner : tier === 'The Supporter' ? COLORS.tierSupporter : COLORS.tierFan;
      return { width: 40, height: 40, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#0a0a0a' };
    },
    testName: { fontWeight: 600, fontSize: 14 },
    testTier: { fontSize: 12, color: COLORS.textMuted },
    // FAQ
    faqList: { maxWidth: 720, margin: '0 auto' },
    faqItem: (isOpen) => ({ background: COLORS.bgCard, border: `1px solid ${isOpen ? COLORS.borderLight : COLORS.border}`, borderRadius: 12, marginBottom: 12, overflow: 'hidden', transition: 'all 0.3s' }),
    faqQ: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', cursor: 'pointer', background: 'none', border: 'none', color: COLORS.textPrimary, fontSize: 15, fontWeight: 600, width: '100%', textAlign: 'left' },
    faqArrow: (isOpen) => ({ fontSize: 18, color: COLORS.textMuted, transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }),
    faqA: { padding: '0 24px 20px', fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.7 },
    // CTA BOTTOM
    ctaSection: { textAlign: 'center', padding: '80px 24px', background: `linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(139,92,246,0.08) 100%)` },
    ctaTitle: { fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, marginBottom: 16, textTransform: 'uppercase' },
    ctaSub: { fontSize: 16, color: COLORS.textSecondary, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.6 },
    // FOOTER
    footer: { borderTop: `1px solid ${COLORS.border}`, padding: '32px 24px', textAlign: 'center', color: COLORS.textMuted, fontSize: 13 },
  };

  return (
    <div style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <div style={s.navInner}>
          <div style={s.logo}>{BRAND.name}</div>
          <div style={s.navLinks}>
            <button style={s.navLink} onClick={() => onNavigate('login')}>Log In</button>
            <button style={s.navCta} onClick={() => onNavigate('signup')}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header style={s.hero}>
        <div style={s.heroBadge}>Membership Now Open</div>
        <h1 style={s.heroTitle}>
          Your All-Access<br />
          Pass to <span style={s.heroAccent}>the Music</span>
        </h1>
        <p style={s.heroSub}>
          Join Way Raps and unlock lossless streaming, exclusive downloads, merch discounts,
          meet & greets, career coaching, and a community that moves with the culture.
        </p>
        <button style={s.heroCta} onClick={() => onNavigate('signup')}>
          Choose Your Tier
        </button>
        <div style={s.heroStats}>
          <div style={s.stat}><div style={s.statNum}>4</div><div style={s.statLabel}>Membership Tiers</div></div>
          <div style={s.stat}><div style={s.statNum}>500+</div><div style={s.statLabel}>Tracks Available</div></div>
          <div style={s.stat}><div style={s.statNum}>24-bit</div><div style={s.statLabel}>Lossless Audio</div></div>
          <div style={s.stat}><div style={s.statNum}>1-on-1</div><div style={s.statLabel}>Coaching Calls</div></div>
        </div>
      </header>

      {/* TIERS */}
      <div style={s.sectionAlt}>
        <section style={s.section}>
          <h2 style={s.sectionTitle}>Choose Your Tier</h2>
          <p style={s.sectionSub}>From free access to the ultimate inner circle experience — there's a tier for every level of fandom.</p>
          <div style={s.tiersGrid}>
            {TIERS.map((tier) => (
              <TierCard key={tier.id} tier={tier} styles={s} onSelect={() => onNavigate('signup', tier.id)} />
            ))}
          </div>
        </section>
      </div>

      {/* FEATURES */}
      <section style={s.section}>
        <h2 style={s.sectionTitle}>What You Get</h2>
        <p style={s.sectionSub}>Every tier is packed with value. Here's a taste of what's waiting for you.</p>
        <div style={s.featuresGrid}>
          {FEATURES_HIGHLIGHT.map((f, i) => (
            <div key={i} style={s.featureCard}>
              <div style={s.featureIcon}>{f.icon}</div>
              <div style={s.featureTitle}>{f.title}</div>
              <div style={s.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <div style={s.sectionAlt}>
        <section style={s.section}>
          <h2 style={s.sectionTitle}>What Members Say</h2>
          <p style={s.sectionSub}>Real talk from real members of the Way Raps community.</p>
          <div style={s.testGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={s.testCard}>
                <div style={s.testQuote}>"{t.text}"</div>
                <div style={s.testAuthor}>
                  <div style={s.testAvatar(t.tier)}>{t.avatar}</div>
                  <div>
                    <div style={s.testName}>{t.name}</div>
                    <div style={s.testTier}>{t.tier} Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section style={s.section}>
        <h2 style={s.sectionTitle}>Questions?</h2>
        <p style={s.sectionSub}>Everything you need to know about Way Raps membership.</p>
        <div style={s.faqList}>
          {FAQ.map((item, i) => (
            <div key={i} style={s.faqItem(openFaq === i)}>
              <button style={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {item.q}
                <span style={s.faqArrow(openFaq === i)}>&#9660;</span>
              </button>
              {openFaq === i && <div style={s.faqA}>{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div style={s.ctaSection}>
        <h2 style={s.ctaTitle}>Ready to Join?</h2>
        <p style={s.ctaSub}>Pick your tier and unlock the full Way Raps experience today. No contracts, cancel anytime.</p>
        <button style={s.heroCta} onClick={() => onNavigate('signup')}>
          Get Started Now
        </button>
      </div>

      {/* FOOTER */}
      <footer style={s.footer}>
        &copy; {new Date().getFullYear()} Way Raps. All rights reserved.
      </footer>
    </div>
  );
}

function TierCard({ tier, styles, onSelect }) {
  const [hover, setHover] = useState(false);
  const s = styles;

  return (
    <div
      style={s.tierCard(tier, hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tier.popular && <div style={s.tierPopular}>Most Popular</div>}
      <div style={s.tierName(tier.color)}>{tier.name}</div>
      <div style={s.tierPrice}>{tier.price === 0 ? 'Free' : `$${tier.price}`}</div>
      {tier.price > 0 && <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 16 }}>per month</div>}
      {tier.price === 0 && <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 16 }}>forever</div>}
      <div style={s.tierDesc}>{tier.description}</div>
      <div>
        {tier.features.map((f, i) => (
          <div key={i} style={s.tierFeature}>
            <span style={s.tierCheck(tier.color)}>&#10003;</span>
            <span style={s.tierFeatureText}>{f}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          ...s.tierCta(tier.color),
          ...(hover ? { background: tier.color, color: '#0a0a0a' } : {}),
        }}
        onClick={onSelect}
      >
        {tier.cta}
      </button>
    </div>
  );
}
