import { useState } from 'react'

export default function AccessGate({ onUnlock, onBack }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = () => {
    const success = onUnlock(code)
    if (!success) {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", background: '#0f0f0c', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }
        .shake { animation: shake .45s ease; }
        .submit-btn { transition: all .2s; cursor: pointer; border: none; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(84,197,255,.3); }
        .code-input { outline: none; font-family: 'Syncopate', sans-serif; letter-spacing: 4px; text-transform: uppercase; }
        .code-input:focus { border-color: #54C5FF !important; }
      `}</style>

      {/* Logo */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Syncopate', sans-serif", fontSize: '10px', color: '#54C5FF', letterSpacing: '4px', lineHeight: 1.4 }}>FREELANCE BOOKKEEPER</div>
        <div style={{ fontFamily: "'Syncopate', sans-serif", fontSize: '10px', color: '#333', letterSpacing: '4px', lineHeight: 1.4 }}>LAUNCH KIT</div>
      </div>

      {/* Card */}
      <div className={shake ? 'shake' : ''} style={{ background: '#141410', border: '1px solid #2a2820', padding: 'clamp(32px,5vw,52px)', width: '100%', maxWidth: '440px', textAlign: 'center' }}>
        {/* Lock icon */}
        <div style={{ width: '52px', height: '52px', background: '#1e1e18', border: '1px solid #2a2820', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '22px' }}>
          🔐
        </div>

        <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(20px,3vw,26px)', color: '#f5f2eb', marginBottom: '10px', lineHeight: 1.3 }}>
          Enter Your Access Code
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '32px' }}>
          Your access code was emailed to you after purchase.<br />
          Check your inbox for an email from us.
        </p>

        <input
          className="code-input"
          type="text"
          value={code}
          onChange={e => { setCode(e.target.value); setError(false) }}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder="ENTER CODE"
          style={{
            width: '100%',
            padding: '16px 20px',
            fontSize: '15px',
            background: '#0a0a08',
            color: '#f5f2eb',
            border: `1px solid ${error ? '#ef4444' : '#2a2820'}`,
            marginBottom: '12px',
          }}
        />

        {error && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#ef4444', marginBottom: '12px' }}>
            That code isn't valid. Check your purchase confirmation email and try again.
          </p>
        )}

        <button className="submit-btn" onClick={handleSubmit} style={{
          width: '100%', padding: '16px', background: '#54C5FF', color: '#1a1410',
          fontFamily: "'Syncopate', sans-serif", fontSize: '11px', letterSpacing: '3px', fontWeight: 700, marginBottom: '24px',
        }}>
          UNLOCK MY KIT
        </button>

        <div style={{ borderTop: '1px solid #1e1e18', paddingTop: '20px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#555', marginBottom: '10px' }}>
            Don't have the kit yet?
          </p>
          <button onClick={onBack} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#54C5FF', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            ← Back to the sales page
          </button>
        </div>
      </div>

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#333', marginTop: '28px', textAlign: 'center' }}>
        Having trouble? Email support@yourdomain.com
      </p>
    </div>
  )
}
