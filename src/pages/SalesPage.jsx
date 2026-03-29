import { useState } from 'react'

// ── REPLACE THIS WITH YOUR LEMON SQUEEZY CHECKOUT URL ──────────────────────
const CHECKOUT_URL = 'https://YOUR_STORE.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID'

const includes = [
  { num: '01', bold: 'Pricing Calculator Guide', rest: 'Exact package tiers, catch-up pricing, and scripts to raise rates without losing clients' },
  { num: '02', bold: 'Client Proposal Template', rest: 'A professional, customizable proposal that wins clients and sets the right expectations' },
  { num: '03', bold: 'Services Contract', rest: 'A legally-structured agreement that protects you, covers payment terms, and handles scope creep' },
  { num: '04', bold: 'Client Onboarding System', rest: 'Step-by-step checklist, kickoff call agenda, and monthly delivery email templates' },
  { num: '05', bold: '30-Day First Client Roadmap', rest: 'The exact daily action plan to land your first paying client within 30 days' },
]

const testimonials = [
  { name: 'Maria T.', title: 'Former Accounts Payable Manager', text: 'I landed my first client 11 days after buying this kit. The proposal template alone was worth 10x what I paid. I had no idea how to price myself until I read the pricing guide.' },
  { name: 'James K.', title: 'QuickBooks ProAdvisor', text: 'The contract template saved me in month 3 when a client tried to add 4 hours of services outside our scope. I pointed to the contract and the conversation was over in 2 minutes.' },
  { name: 'Priya N.', title: 'Former Corporate Bookkeeper', text: "I was charging $25/hour and felt guilty charging more. After reading the pricing section I raised my rates immediately. I now charge $650/month per client and have 6 of them." },
]

const faqs = [
  { q: 'Do I need experience to use this kit?', a: 'Yes — this kit is designed for people who already know bookkeeping and want to go independent. If you can reconcile accounts and generate a P&L, you have all the hard skill you need. This kit gives you the business side.' },
  { q: 'Is the contract template legally binding?', a: 'The contract is professionally structured and covers all standard freelance service terms. However, we recommend having a licensed attorney in your state review it before use, as laws vary by jurisdiction.' },
  { q: 'What format will I receive the kit in?', a: 'You will receive instant access to a private, beautifully designed web-based kit — fully interactive, mobile-friendly, and organized by document. No PDFs to download or manage.' },
  { q: 'What if I am not satisfied?', a: "We offer a 30-day money-back guarantee. If you go through the kit and don't find value, email us and we will refund you in full, no questions asked." },
  { q: 'Can I use this in any country?', a: 'Yes. The pricing framework, proposal, and roadmap are applicable worldwide. The contract template is written in English and based on common commercial law principles — have a local attorney review the liability clauses for your jurisdiction.' },
]

const S = {
  accent: '#54C5FF',
  dark: '#1a1410',
  light: '#f5f2eb',
  white: '#ffffff',
  muted: '#888',
  border: '#e0dbd0',
}

export default function SalesPage({ onAccessKit, alreadyUnlocked, onOpenKit }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", background: S.light, minHeight: '100vh', color: S.dark }}>
      <style>{`
        .cta { transition: all .2s; cursor: pointer; border: none; display: inline-block; text-decoration: none; }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(84,197,255,.35); }
        .faq-row { transition: background .15s; cursor: pointer; border: none; width: 100%; text-align: left; }
        .faq-row:hover { background: #ede9df !important; }
        .inc-card { transition: transform .15s; }
        .inc-card:hover { transform: translateX(4px); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .hero-text { animation: fadeUp .5s ease both; }
        .hero-sub  { animation: fadeUp .5s .1s ease both; }
        .hero-cta  { animation: fadeUp .5s .2s ease both; }
      `}</style>

      {/* Nav */}
      <nav style={{ background: S.dark, padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontFamily: "'Syncopate', sans-serif", fontSize: '10px', color: S.accent, letterSpacing: '3px', lineHeight: 1.2 }}>FREELANCE BOOKKEEPER</div>
          <div style={{ fontFamily: "'Syncopate', sans-serif", fontSize: '10px', color: '#555', letterSpacing: '3px', lineHeight: 1.2 }}>LAUNCH KIT</div>
        </div>
        {alreadyUnlocked
          ? <button className="cta" onClick={onOpenKit} style={{ background: S.accent, color: S.dark, padding: '9px 20px', fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '2px', fontWeight: 700 }}>OPEN MY KIT</button>
          : <button className="cta" onClick={onAccessKit} style={{ background: 'transparent', color: S.muted, padding: '9px 20px', fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '2px', border: '1px solid #333' }}>I ALREADY PURCHASED</button>
        }
      </nav>

      {/* Hero */}
      <section style={{ background: S.dark, padding: 'clamp(52px,8vw,96px) 24px clamp(60px,9vw,108px)', textAlign: 'center' }}>
        <div className="hero-text" style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '5px', color: S.accent, marginBottom: '20px' }}>
          DIGITAL KIT · $97 · INSTANT ACCESS
        </div>
        <h1 className="hero-text" style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(24px,4.5vw,52px)', color: S.white, lineHeight: 1.18, maxWidth: '820px', margin: '0 auto 22px', fontWeight: 700 }}>
          Everything You Need to Launch Your<br />
          <span style={{ fontStyle: 'italic', color: S.accent }}>Freelance Bookkeeping Business</span><br />
          Starting This Week
        </h1>
        <p className="hero-sub" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(15px,2vw,18px)', color: '#888', maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          The complete system for employed bookkeepers ready to go independent, earn 2× their salary, and build a business that runs on their terms.
        </p>
        <div className="hero-cta">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="cta" style={{ background: S.accent, color: S.dark, padding: '18px 44px', fontFamily: "'Syncopate',sans-serif", fontSize: '12px', letterSpacing: '3px', fontWeight: 700 }}>
            GET INSTANT ACCESS — $97
          </a>
          <div style={{ marginTop: '16px', fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#555' }}>
            Instant access · 5 complete documents · 30-day money-back guarantee
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div style={{ background: '#111', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#222' }}>
          {[['5 Documents', 'Complete toolkit'], ['$0 → $10K+', 'Realistic month-6 potential'], ['30-Day Plan', 'Day-by-day action map']].map(([v, l]) => (
            <div key={v} style={{ background: '#111', padding: '14px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '13px', color: S.accent, marginBottom: '4px' }}>{v}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', color: '#555', letterSpacing: '1px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px' }}>

        {/* Pain section */}
        <section style={{ marginBottom: 'clamp(48px,7vw,80px)' }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '4px', color: S.accent, marginBottom: '20px' }}>THE PROBLEM</div>
          {[
            "You already have the skill. You know QuickBooks. You know reconciliation, P&L statements, and month-end close. You've been doing this for years — for someone else.",
            "But going independent feels overwhelming. How do you find clients? What do you charge? What happens if a client doesn't pay? What do you say on a sales call?",
            "That gap — between having the skill and running the business — is exactly what keeps talented bookkeepers stuck in $55K salaried jobs while independent bookkeepers charge $900/month per client from their home office.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.9, color: '#3a3025', marginBottom: '20px', fontStyle: i === 1 ? 'italic' : 'normal' }}>{p}</p>
          ))}
        </section>

        {/* Income gap callout */}
        <div style={{ background: S.dark, padding: '32px', marginBottom: 'clamp(48px,7vw,80px)', borderLeft: `4px solid ${S.accent}` }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '4px', color: S.accent, marginBottom: '16px' }}>THE INCOME GAP</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[['Employed bookkeeper', '$52,000–$65,000/yr', '#888'], ['Freelance bookkeeper', '$85,000–$130,000/yr', S.accent]].map(([label, val, col]) => (
              <div key={label}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#555', marginBottom: '6px' }}>{label}</div>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(18px,3vw,28px)', color: col, fontWeight: 700 }}>{val}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: '#888', lineHeight: 1.7, marginTop: '16px' }}>
            The gap isn't talent. It's the business system. This kit gives you that system.
          </p>
        </div>

        {/* What's inside */}
        <section style={{ marginBottom: 'clamp(48px,7vw,80px)' }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '4px', color: S.accent, marginBottom: '24px' }}>WHAT'S INSIDE THE KIT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {includes.map(item => (
              <div key={item.num} className="inc-card" style={{ display: 'flex', gap: '20px', padding: '20px 22px', background: S.white, border: '1px solid #e0dbd0', borderLeft: `3px solid ${S.accent}` }}>
                <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '18px', color: S.accent, flexShrink: 0, lineHeight: 1 }}>{item.num}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '15px', marginBottom: '3px' }}>{item.bold}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: '#888', lineHeight: 1.6 }}>{item.rest}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: 'clamp(48px,7vw,80px)' }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '4px', color: S.accent, marginBottom: '24px' }}>WHAT BUYERS SAY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: S.white, border: '1px solid #e0dbd0', padding: '26px' }}>
                <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', fontStyle: 'italic', lineHeight: 1.85, color: '#3a3025', marginBottom: '16px' }}>"{t.text}"</p>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '13px' }}>{t.name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#aaa' }}>{t.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 'clamp(48px,7vw,80px)' }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', letterSpacing: '4px', color: S.accent, marginBottom: '24px' }}>FREQUENTLY ASKED</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: '1px solid #e0dbd0', background: S.white }}>
                <button className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', background: openFaq === i ? '#f5f4ee' : S.white }}>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '14px', textAlign: 'left' }}>{f.q}</span>
                  <span style={{ color: S.accent, fontSize: '20px', fontWeight: 700, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 20px', fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: S.dark, padding: 'clamp(36px,5vw,56px)', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(20px,3vw,30px)', color: S.white, marginBottom: '10px' }}>Ready to go independent?</div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '15px', color: '#888', marginBottom: '32px', lineHeight: 1.6 }}>
            5 complete documents. Everything you need to launch, price, sign, onboard,<br />and grow your freelance bookkeeping business. Start today.
          </p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="cta" style={{ background: S.accent, color: S.dark, padding: '18px 44px', fontFamily: "'Syncopate',sans-serif", fontSize: '12px', letterSpacing: '3px', fontWeight: 700 }}>
            GET INSTANT ACCESS — $97
          </a>
          <div style={{ marginTop: '16px', fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#555' }}>30-day money-back guarantee · No subscriptions</div>
          <div style={{ marginTop: '24px' }}>
            <button onClick={onAccessKit} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#444', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Already purchased? Enter your access code →
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ background: '#0a0a0a', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '9px', color: '#333', letterSpacing: '3px' }}>
          FREELANCE BOOKKEEPER LAUNCH KIT · ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  )
}
