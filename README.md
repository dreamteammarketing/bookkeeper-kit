# Freelance Bookkeeper Launch Kit
### Your complete web-based digital product — ready to deploy in 30 minutes.

---

## What This Is

A full-stack React web app containing:
- **Public sales page** — headline, pain copy, what's inside, testimonials, FAQ, CTA
- **Access gate** — buyers enter a code to unlock the kit
- **Interactive kit** — all 5 documents, fully functional, beautifully designed

---

## Quick Start (Local Preview)

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173 — you'll see the sales page.
To preview the kit, click "I Already Purchased" and enter `BOOKKEEPER2025`.

---

## Step-by-Step Deployment

### Step 1 — Push to GitHub

1. Go to github.com → New repository → name it `bookkeeper-kit` → Create
2. In your terminal (inside this folder):

```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bookkeeper-kit.git
git push -u origin main
```

---

### Step 2 — Deploy to Vercel (Free)

1. Go to **vercel.com** → Sign up with GitHub (free)
2. Click **"Add New Project"**
3. Import your `bookkeeper-kit` repository
4. Under **"Environment Variables"**, add:
   - **Name:** `VITE_ACCESS_CODE`
   - **Value:** `BOOKKEEPER2025` ← (or any code you choose)
5. Click **Deploy**

Your site will be live at `https://bookkeeper-kit.vercel.app` (or a custom domain).

> **Custom domain:** In Vercel → Settings → Domains → Add your domain (e.g. `bookkeeperklt.com`). Point your DNS to Vercel's nameservers. Takes ~10 minutes.

---

### Step 3 — Set Up Lemon Squeezy (Payments)

1. Go to **lemonsqueezy.com** → Create a free account
2. Create a Store → Add a Product → Digital Product → price at $97
3. In **"Confirmation Email"** settings, add this to the email body:

```
Thank you for purchasing the Freelance Bookkeeper Launch Kit!

Your access code: BOOKKEEPER2025

Visit your kit here: https://YOUR-SITE.vercel.app/#access

Enter the code above to unlock all 5 documents instantly.

Questions? Reply to this email.
```

4. Copy your **Checkout URL** from Lemon Squeezy
5. Open `src/pages/SalesPage.jsx` → find this line at the top:

```js
const CHECKOUT_URL = 'https://YOUR_STORE.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID'
```

Replace it with your real Lemon Squeezy checkout URL → save → push to GitHub → Vercel auto-redeploys.

---

### Step 4 — Change Your Access Code (Recommended)

Choose a unique, hard-to-guess access code (e.g. `BK-LAUNCH-9471`).

1. Update it in Vercel: Settings → Environment Variables → Edit `VITE_ACCESS_CODE`
2. Update it in your Lemon Squeezy confirmation email
3. Redeploy (Vercel does this automatically when you change env vars)

---

### Step 5 — Update Branding (Optional)

| File | What to change |
|------|---------------|
| `src/pages/SalesPage.jsx` | Your name, testimonials, support email |
| `src/pages/AccessGate.jsx` | Your support email address |
| `index.html` | Page title and meta description |
| `public/favicon.svg` | Your favicon |

---

## How the Access System Works

```
Buyer lands on sales page
       ↓
Clicks "Get Instant Access — $97"
       ↓
Goes to Lemon Squeezy checkout
       ↓
Pays → receives confirmation email with access code
       ↓
Visits your site → clicks "I Already Purchased"
       ↓
Enters access code → kit unlocks
       ↓
Code is saved in browser (they won't need to re-enter)
```

The code is stored in `localStorage` so returning buyers skip the gate automatically.

---

## File Structure

```
bookkeeper-kit/
├── src/
│   ├── App.jsx          ← Router + access logic
│   ├── main.jsx         ← React entry point
│   └── pages/
│       ├── SalesPage.jsx    ← Public sales page
│       ├── AccessGate.jsx   ← Code entry screen
│       └── KitPage.jsx      ← Full interactive kit
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── vercel.json          ← SPA routing config
├── .env.example
└── package.json
```

---

## Total Cost to Run This

| Service | Cost |
|---------|------|
| Vercel hosting | Free |
| Lemon Squeezy | Free (5% fee per sale) |
| Custom domain | ~$12/year (optional) |
| **Total** | **$0–$12/year** |

At $97 per sale, Lemon Squeezy takes ~$4.85. You keep ~$92.15 per sale.

---

## Support

Having trouble deploying? The most common issues:

- **Blank page on Vercel:** Check that `vercel.json` is in the root folder
- **Access code not working:** Confirm `VITE_ACCESS_CODE` is set in Vercel env vars (not just `.env`)
- **Checkout link broken:** Replace the placeholder URL in `SalesPage.jsx` with your real Lemon Squeezy URL

---

Built with React + Vite. Deployed on Vercel. Payments via Lemon Squeezy.
