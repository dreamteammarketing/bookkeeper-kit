# Way Raps — Membership Platform
### Exclusive membership tiers for the ultimate music experience.

---

## What This Is

A React web app for the **Way Raps** music brand membership platform:
- **Landing page** — hero, membership tiers, features, testimonials, FAQ
- **Sign-up flow** — tier selection + registration form
- **Login page** — member authentication
- **Member dashboard** — benefits overview, quick access, tier upgrades

### Membership Tiers

| Tier | Price | Highlights |
|------|-------|------------|
| The Listener | Free | Standard streaming, newsletter, community |
| The Fan | $9.99/mo | Lossless FLAC, 2 downloads/mo, 10% merch discount |
| The Supporter | $29.99/mo | Unlimited downloads, 25% merch, behind-the-scenes, Q&A |
| The Inner Circle | $99.99/mo | Meet & greets, coaching calls, 40% merch, signed merch |

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 — you'll see the landing page.

---

## Deployment (Vercel)

1. Push to GitHub
2. Go to **vercel.com** → Import repository
3. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`.

---

## File Structure

```
bookkeeper-kit/
├── src/
│   ├── App.jsx              ← Router + state management
│   ├── main.jsx             ← React entry point
│   ├── data.js              ← Tier data, features, testimonials, FAQ
│   └── pages/
│       ├── LandingPage.jsx  ← Public landing page
│       ├── SignUpPage.jsx   ← Tier selection + registration
│       ├── LoginPage.jsx    ← Member login
│       └── MemberDashboard.jsx ← Member area
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── vercel.json              ← SPA routing config
└── package.json
```

---

## Next Steps (Production)

To make this production-ready, you would add:
- **Backend API** — User authentication, password hashing, session management
- **Payment integration** — Stripe or similar for recurring membership billing
- **Database** — Store user accounts, membership status, billing history
- **Music streaming** — Integrate with a streaming/CDN service for audio delivery
- **Email** — Transactional emails for signup confirmation, billing receipts

---

Built with React + Vite. Deployed on Vercel.
