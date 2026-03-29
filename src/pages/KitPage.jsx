import { useState } from 'react'

const ACCENT = '#54C5FF'

const docs = [
  {
    id: 'pricing', number: '01', title: 'Pricing Calculator Guide', subtitle: 'How to Price Your Bookkeeping Services', color: '#54C5FF',
    sections: [
      { heading: 'Why Most Bookkeepers Underprice By 40%', body: `The #1 mistake new freelance bookkeepers make is pricing by the hour. When you charge hourly, you punish yourself for getting faster — and you attract clients who nickel-and-dime every invoice.\n\nThe solution is value-based package pricing. Your client doesn't care how many hours you spend. They care that their books are clean, their taxes are ready, and they're not stressed. That outcome is worth a fixed monthly fee.\n\nThe market rate for freelance bookkeeping in 2025 is significantly higher than most employed bookkeepers realize.` },
      {
        heading: 'The Three-Tier Package System', isTable: true,
        table: {
          headers: ['Package', 'Monthly Fee', 'Transactions/mo', 'Ideal Client'],
          rows: [
            ['Starter', '$300–$500', 'Up to 75', 'Freelancers, solopreneurs, side businesses'],
            ['Growth', '$500–$900', 'Up to 200', 'Small businesses, LLCs, e-commerce stores'],
            ['Premium', '$900–$1,500+', '200+', 'Established businesses, multi-entity, high volume'],
          ],
        },
      },
      { heading: 'How to Scope a New Client (5-Question Framework)', body: `Before quoting any price, ask every prospect these five questions:\n\n1. How many bank and credit card accounts do you have?\n   (1–2 = Starter. 4+ = Growth or Premium.)\n\n2. How many transactions do you process per month?\n   (Under 75 = Starter. 75–200 = Growth. Over 200 = Premium.)\n\n3. Do you have employees or contractors you pay regularly?\n   (Payroll = automatic Premium tier.)\n\n4. What accounting software are you using or open to?\n   (QuickBooks Online and Xero are standard. Factor in migration time if they're on something else.)\n\n5. When were your books last fully reconciled?\n   (If the answer is "never" or "over 6 months ago," quote a catch-up job separately.)` },
      { heading: 'Catch-Up Bookkeeping: How to Quote It', body: `Catch-up bookkeeping is when a client's books are behind and need to be brought current. This is a significant additional revenue opportunity.\n\nStandard catch-up pricing:\n• 1–3 months behind: $150–$300 per month of catch-up\n• 4–6 months behind: $100–$200 per month\n• 7–12 months behind: $75–$150 per month\n• Over 12 months: Flat project quote ($1,500–$4,000+)\n\nAlways quote catch-up as a separate one-time fee before the monthly retainer begins. Never bundle it into your monthly rate.\n\nExample: Client is 4 months behind → $600 catch-up (one-time) + $500/month ongoing.` },
      { heading: 'Raising Your Rates: Script & Guidelines', body: `Raise your rates annually — at minimum. Here is the exact message to send:\n\n---\n"Hi [Name], I'm writing to let you know that my monthly rate for your account will be adjusting from $[current] to $[new] beginning [date 30 days out]. This reflects the increased scope of our work together and ensures I can continue delivering the level of service you expect. Your next invoice will reflect this update. Thank you for being a valued client — it's a pleasure working with you."\n---\n\nGuidelines:\n• Year 1 clients: 10–15% increase after 12 months\n• Long-term clients (2+ years): 8–12% annually\n• If a client pushes back: offer to reduce scope, not price\n• If a client leaves over a rate increase: they were not a long-term fit` },
    ],
  },
  {
    id: 'proposal', number: '02', title: 'Client Proposal Template', subtitle: 'A Plug-and-Play Proposal That Wins Clients', color: '#34D399',
    sections: [
      { heading: 'Cover Page', isTemplate: true, body: `BOOKKEEPING SERVICES PROPOSAL\n\nPrepared for: [Client Business Name]\nPrepared by: [Your Name], [Your Business Name]\nDate: [Date]\nValid until: [Date + 14 days]\n\n---\n[Your Logo / Name]\n[Your Email] | [Your Phone] | [Your Website]` },
      { heading: 'Section 1 — Understanding Your Situation', body: `This section demonstrates you listened. Write 3–5 sentences summarizing what the client told you in your discovery call.\n\nTemplate:\n"Based on our conversation on [date], I understand that [Business Name] is currently [describe situation]. Your primary goals are [goal 1] and [goal 2]. The challenges you're facing include [challenge].\n\nI've put together this proposal specifically for your situation. Everything below is designed to solve these exact problems."` },
      { heading: 'Section 2 — Proposed Services', isTemplate: true, body: `WHAT'S INCLUDED IN YOUR [PACKAGE NAME] PACKAGE\n\nMonthly Bookkeeping Services:\n✓ Full reconciliation of all bank and credit card accounts ([X] accounts)\n✓ Categorization of all income and expenses\n✓ Monthly Profit & Loss statement delivered by the [X]th of each month\n✓ Monthly Balance Sheet\n✓ Accounts payable and receivable tracking [Growth/Premium only]\n✓ Quarterly financial review call (30 min) [Growth/Premium only]\n✓ Payroll processing ([X] employees) [Premium only]\n✓ Year-end close and tax prep coordination [Premium only]\n✓ Email support — responses within [24/48] business hours\n\nSoftware: We will work in [QuickBooks Online / Xero / Wave].` },
      { heading: 'Section 3 — Investment', isTemplate: true, body: `YOUR INVESTMENT\n\nOne-Time Fees:\nSoftware setup / migration: $[amount] (if applicable)\nCatch-up bookkeeping ([X] months): $[amount] (if applicable)\n\nMonthly Recurring:\n[Package Name] Package: $[monthly fee]/month\nBilled on the [1st / 15th] of each month\nFirst invoice due upon signing\n\nTotal First Month Investment: $[one-time + monthly]\nOngoing Monthly Investment: $[monthly fee]\n\nPAYMENT TERMS\nPayment is due within 5 business days of invoice date.\nLate payments subject to 1.5% monthly fee.` },
      { heading: 'Section 4 — Next Steps', isTemplate: true, body: `HOW TO GET STARTED\n\nStep 1: Review and sign this proposal (digital signature accepted)\nStep 2: Complete the Client Onboarding Form I'll send within 24 hours\nStep 3: Pay the first invoice to secure your start date\nStep 4: Schedule a 30-minute kickoff call to connect accounts\nStep 5: Your first month of bookkeeping begins on [date]\n\nThis proposal is valid until [date].\n\nTo accept, simply reply "I accept" to this email or sign the attached agreement.\n\n[Your Name] · [Business Name] · [Email] · [Phone]` },
    ],
  },
  {
    id: 'contract', number: '03', title: 'Services Contract', subtitle: 'Professional Contract to Protect You and Your Client', color: '#F472B6',
    sections: [
      { heading: 'Agreement Header', isTemplate: true, body: `BOOKKEEPING SERVICES AGREEMENT\n\nThis Agreement is entered into as of [Date] by and between:\n\nService Provider: [Your Name / Business Name], [Your Address] ("Bookkeeper")\nClient: [Client Business Name], [Client Address] ("Client")\n\nTogether referred to as "the Parties."` },
      { heading: '1. Scope of Services', body: `The Bookkeeper agrees to provide the following services on a monthly basis:\n[List services from your proposal]\n\nServices are performed remotely using [QuickBooks Online / Xero].\n\nServices do NOT include: tax preparation or filing, payroll (unless listed), financial advice, legal advice, or services outside the agreed scope.\n\nAny out-of-scope services will be quoted separately before work begins.` },
      { heading: '2. Payment Terms', body: `Monthly Fee: $[amount], billed on the [1st / 15th] of each month.\nPayment due within 5 business days of invoice.\n\nLate Payment: Invoices unpaid after 10 days subject to 1.5% per month.\n\nReturned Payments: $35 fee for returned checks or failed ACH transfers.\n\nPrice Adjustments: 30 days written notice required. Client may terminate without penalty if new pricing is not accepted.` },
      { heading: '3. Client Responsibilities', body: `The Client agrees to:\n• Provide complete, timely access to all financial accounts and records\n• Respond to Bookkeeper requests within 5 business days\n• Notify Bookkeeper of significant financial events within 7 days\n• Not grant Bookkeeper's file access to unauthorized third parties\n\nThe accuracy of the final books depends on the accuracy of information provided by the Client. Bookkeeper is not liable for errors resulting from incomplete or incorrect client information.` },
      { heading: '4. Confidentiality', body: `Both parties agree to maintain strict confidentiality of all financial information and business data exchanged under this Agreement.\n\nThe Bookkeeper will not share, sell, or disclose any Client financial information to any third party without explicit written consent, except as required by law.\n\nThis confidentiality obligation survives termination for 3 years.` },
      { heading: '5. Termination', body: `Either party may terminate with 30 days written notice via email.\n\nUpon termination, the Client is responsible for all fees incurred through the termination date. Bookkeeper will deliver all completed work and data in exportable format within 10 business days.\n\nImmediate termination (no notice required) if Client: (a) fails to pay two or more consecutive invoices, (b) provides fraudulent information, or (c) engages in illegal activity.` },
      { heading: '6. Limitation of Liability', body: `The Bookkeeper's total liability shall not exceed the total fees paid in the 3 months preceding the claim.\n\nBookkeeper is not liable for: tax penalties, IRS audits, or regulatory fines; financial decisions made based on the books; losses from Client's failure to review monthly reports.\n\n⚠️ NOTE: This is a professional template. Have a licensed attorney in your state review it before use. Laws vary by jurisdiction.` },
      { heading: '7. Signatures', isTemplate: true, body: `SERVICE PROVIDER:\nSignature: _________________________\nPrinted Name: [Your Name]\nTitle: [Owner / Founder]\nDate: _______________\n\nCLIENT:\nSignature: _________________________\nPrinted Name: ___________________________\nTitle: ___________________________\nDate: _______________` },
    ],
  },
  {
    id: 'onboarding', number: '04', title: 'Client Onboarding System', subtitle: 'Step-by-Step Onboarding Checklist & Templates', color: '#FBBF24',
    sections: [
      { heading: 'The Onboarding Philosophy', body: `Your onboarding process is your first impression as an independent bookkeeper. A smooth, professional onboarding tells the client they made the right choice. A chaotic one plants doubt — and doubt leads to cancellations.\n\nThe goal of onboarding is to accomplish three things in the first 7 days:\n1. Collect everything you need to do the work\n2. Set clear expectations so neither party is surprised\n3. Make the client feel like they hired a professional, not a freelancer\n\nUse this checklist for every client, every time.` },
      { heading: 'Pre-Start Checklist (Before Day 1)', isChecklist: true, items: ['Send signed contract and first invoice — do not begin work until both are received', 'Send Client Onboarding Form (template below)', 'Schedule kickoff call (30 min) — use Calendly or send 3 time options', 'Set up client folder in Google Drive: [Client Name] → Documents, Reports, Statements', 'Create client workspace in your project management tool', 'Add client to your invoicing system (QuickBooks, Wave, or FreshBooks)', 'Prepare account access request list based on their bank/software situation'] },
      { heading: 'Client Onboarding Form', isTemplate: true, body: `WELCOME TO [YOUR BUSINESS NAME]\nPlease complete this form within 48 hours.\n\nBUSINESS INFORMATION\nBusiness Legal Name: ____________________\nBusiness Type (LLC, Sole Prop, S-Corp): ____________________\nEIN / Tax ID: ____________________\nFiscal Year End: ____________________\n\nFINANCIAL ACCOUNTS\nBusiness Checking Account(s): ____________________\nBusiness Credit Card(s): ____________________\nPayPal / Stripe / Payment Processors: ____________________\nLoans or Lines of Credit: ____________________\n\nACCOUNTING SOFTWARE\nCurrently using: ____________________\nLogin email on file: ____________________\n(We will send an accountant invitation — please accept within 24 hours)\n\nADDITIONAL INFORMATION\nHow far back are your books current? ____________________\nDo you have employees or contractors? ____________________\nWho is your CPA / tax preparer? ____________________\nPreferred communication: Email / Phone / Text\nBest time to reach you: ____________________` },
      { heading: 'Kickoff Call Agenda (30 Min)', body: `Min 0–5: Introductions\n"Tell me about how the business is going and what brought you to hiring a bookkeeper."\n\nMin 5–12: Review onboarding form\n"I've reviewed your form — I have a few questions. [Ask about anything unclear.]"\n\nMin 12–20: Walk through the workflow\n"Here's how we'll work together each month: by the [X]th you'll receive [deliverables]. I'll need you to flag unusual transactions within [X] days."\n\nMin 20–27: Connect accounts\n"Let's do a quick screen share to confirm I have access to all your accounts."\n\nMin 27–30: Next steps\n"Your first month's reports will be ready by [date]. Any questions before we wrap up?"` },
      { heading: 'Month 1 Delivery Checklist', isChecklist: true, items: ['Complete full reconciliation of all connected accounts', 'Categorize all transactions — flag unusual items for client confirmation', 'Generate Profit & Loss statement (PDF + in-software)', 'Generate Balance Sheet (PDF + in-software)', 'Draft Month 1 summary email (template below)', 'Note recurring transactions needing future clarification', 'Send invoice for Month 2 before delivering Month 1 reports'] },
      { heading: 'Monthly Report Delivery Email', isTemplate: true, body: `Subject: [Business Name] — [Month] Financial Reports Ready\n\nHi [Client Name],\n\nYour [Month] bookkeeping is complete. Here's a quick summary:\n\n📊 FINANCIAL SNAPSHOT — [MONTH YEAR]\nTotal Revenue: $[amount]\nTotal Expenses: $[amount]\nNet Profit: $[amount]\nProfit Margin: [X]%\n\n[1–2 sentences noting anything notable this month.]\n\nFull reports: [Google Drive link]\n• Profit & Loss Statement\n• Balance Sheet\n\nACTION NEEDED: [List anything requiring response, or "No action needed this month."]\n\nYour next report will be ready by [date].\n\n[Your Name] · [Business Name]` },
    ],
  },
  {
    id: 'roadmap', number: '05', title: '30-Day First Client Roadmap', subtitle: 'Land Your First Paying Client in 30 Days', color: '#A78BFA',
    sections: [
      { heading: 'The Mindset Shift That Changes Everything', body: `You already have the hard skill. Every employed bookkeeper reading this knows how to reconcile accounts, generate financial statements, and work in accounting software.\n\nWhat's holding you back is the business side. You don't know how to find clients, how to talk about your services confidently, or how to close a deal. This roadmap solves that.\n\nOne important truth: your first client will not be perfect. They might be underpriced or have messy books. That's okay. Your first client is your proof of concept — they give you a testimonial, a case study, and the confidence to charge more for your second.` },
      { heading: 'Week 1 — Foundation (Days 1–7)', body: `Day 1: Create your LinkedIn profile with a bookkeeper-specific headline:\n"[Name] | Freelance Bookkeeper | Helping Small Businesses Get Clean Books & Stress-Free Finances | QuickBooks ProAdvisor"\n\nDay 2: Write your LinkedIn About section. Framework: hook (their pain), what you do, your credentials, clear CTA.\n\nDay 3: Complete your QuickBooks Online ProAdvisor certification (free at quickbooks.intuit.com/accountants — ~3 hours).\n\nDay 4: Set up your Gumroad, Stan Store, or product page for any digital products.\n\nDay 5: Write your 10-person warm list — friends, family, former colleagues, local business owners you know.\n\nDay 6: Draft your outreach scripts (see Day 8 section).\n\nDay 7: Review everything. Confirm profile is live and outreach is ready.` },
      { heading: 'Week 2 — First Conversations (Days 8–14)', isChecklist: true, items: ["Message your 10-person warm list: 'Hey [Name], I just launched my freelance bookkeeping business. Not reaching out to sell you anything — just letting people I trust know in case anyone in their network needs help with their books. Do you know anyone who might benefit?'", 'Post your first LinkedIn content piece: the income gap carousel', 'Join 3 Facebook groups for small business owners — introduce yourself, be helpful, do not pitch', 'Send 10 LinkedIn connection requests per day to small business owners in your area', "Set up a free Calendly link for a '30-Minute Financial Clarity Call'", 'Add your Calendly link to your LinkedIn profile, email signature, and bio', 'Follow up once with warm list contacts who haven\'t responded'] },
      { heading: 'Week 3 — Discovery Calls (Days 15–21)', body: `By now you should have 1–3 discovery calls booked. Use this script:\n\nOPENING: "I like to run these focused so we both get the most out of the time. I'll ask a few questions and at the end I'll be honest about whether I can help. Sound good?"\n\nDISCOVERY QUESTIONS:\n• "Tell me about your business — what do you do and how long have you been running it?"\n• "Walk me through your current bookkeeping situation."\n• "When were your books last fully reconciled?"\n• "What's the biggest financial headache right now?"\n• "If your books were perfect every month, what would that change for you?"\n\nPRESENTING: "Based on what you've shared, I'd recommend my [Package]. Here's what's included... The investment is $[X]/month."\n\nCLOSING: "Are you ready to move forward, or is there anything that would make this decision easier?"` },
      { heading: 'Week 4 — Close & Onboard (Days 22–30)', body: `Day 22–24: Send proposals to everyone who expressed interest. Use Document 02.\n\nDay 25: Post your second LinkedIn piece — a value post teaching one bookkeeping concept small business owners get wrong.\n\nDay 26: Follow up on open proposals:\n"Hi [Name], I have one more opening this month for a new client. Let me know if you have any questions."\n\nDay 27: If you have a signed client, begin onboarding using Document 04.\n\nDay 28–30: Post a LinkedIn update: "Day 30 update: [what you've accomplished]. Building in public. Here's what I learned." — This attracts future clients and keeps your network warm.\n\nMONTH 1 GOAL: 1 signed client at $300–$500/month. That's your proof of concept.` },
      {
        heading: '12-Month Revenue Projection', isTable: true,
        table: {
          headers: ['Timeline', 'Milestone', 'Monthly Revenue'],
          rows: [
            ['Month 1', '1 client signed (Starter)', '$300–$500'],
            ['Month 2', '2–3 clients signed', '$900–$1,500'],
            ['Month 3', '3–5 clients, mix of packages', '$2,000–$4,500'],
            ['Month 6', '8–12 clients, raised rates', '$6,000–$12,000'],
            ['Month 12', 'Full roster, referral-based', '$10,000–$18,000'],
          ],
        },
      },
    ],
  },
]

export default function KitPage({ onBack }) {
  const [activeDoc, setActiveDoc] = useState(0)
  const [expandedSection, setExpandedSection] = useState(null)
  const doc = docs[activeDoc]

  const switchDoc = (i) => { setActiveDoc(i); setExpandedSection(null) }

  return (
    <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", background: '#f5f2eb', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #c5bfb0; }
        .doc-tab { transition: all .15s; cursor: pointer; border: none; }
        .doc-tab:hover { background: #ede9df !important; }
        .sec-row { transition: background .15s; cursor: pointer; }
        .sec-row:hover { background: #ede9df !important; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .fu { animation: fadeUp .25s ease both; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #1a1410; color: #f5f2eb; padding: 11px 14px; text-align: left; font-size: 11px; letter-spacing: 2px; font-family: 'Syncopate', sans-serif; font-weight: 400; }
        td { padding: 11px 14px; font-size: 13px; border-bottom: 1px solid #e0dbd0; font-family: 'DM Sans', sans-serif; line-height: 1.5; }
        tr:last-child td { border-bottom: none; }
        tr:nth-child(even) td { background: #ede9df; }
      `}</style>

      {/* Top nav */}
      <div style={{ background: '#1a1410', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', color: ACCENT, letterSpacing: '3px', lineHeight: 1.3 }}>FREELANCE BOOKKEEPER</div>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '10px', color: '#555', letterSpacing: '3px', lineHeight: 1.3 }}>LAUNCH KIT</div>
        </div>
        <button onClick={onBack} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: '#555', background: 'none', border: '1px solid #333', padding: '8px 16px', cursor: 'pointer' }}>
          ← Sales Page
        </button>
      </div>

      {/* Doc tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e0dbd0', display: 'flex', overflowX: 'auto', padding: '0 8px' }}>
        {docs.map((d, i) => (
          <button key={d.id} className="doc-tab" onClick={() => switchDoc(i)} style={{
            padding: '14px 14px', textAlign: 'left', minWidth: 'fit-content', flexShrink: 0,
            background: activeDoc === i ? '#f5f2eb' : '#fff',
            borderBottom: `3px solid ${activeDoc === i ? d.color : 'transparent'}`,
          }}>
            <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '9px', color: activeDoc === i ? d.color : '#ccc', letterSpacing: '2px', marginBottom: '3px' }}>{d.number}</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 600, color: activeDoc === i ? '#1a1410' : '#aaa', whiteSpace: 'nowrap' }}>
              {d.title.split(' ').slice(0, 3).join(' ')}
            </div>
          </button>
        ))}
      </div>

      {/* Doc body */}
      <div className="fu" key={activeDoc} style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(24px,4vw,44px) 20px' }}>

        {/* Doc header */}
        <div style={{ borderLeft: `4px solid ${doc.color}`, paddingLeft: '20px', marginBottom: '32px' }}>
          <div style={{ fontFamily: "'Syncopate',sans-serif", fontSize: '9px', color: doc.color, letterSpacing: '4px', marginBottom: '8px' }}>
            DOCUMENT {doc.number} OF 05
          </div>
          <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#1a1410', marginBottom: '6px' }}>{doc.title}</h2>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: '#888' }}>{doc.subtitle}</div>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {doc.sections.map((sec, i) => {
            const isOpen = expandedSection === i
            return (
              <div key={i} style={{ background: '#fff', border: '1px solid #e0dbd0', boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,.06)' : 'none' }}>
                <div className="sec-row" onClick={() => setExpandedSection(isOpen ? null : i)} style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', background: isOpen ? '#f5f4ee' : '#fff' }}>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: '14px', color: '#1a1410' }}>{sec.heading}</div>
                  <div style={{ color: doc.color, fontWeight: 700, fontSize: '20px', flexShrink: 0 }}>{isOpen ? '−' : '+'}</div>
                </div>
                {isOpen && (
                  <div className="fu" style={{ padding: '20px 24px', borderTop: `2px solid ${doc.color}25` }}>
                    {sec.isTable && (
                      <div style={{ overflowX: 'auto' }}>
                        <table>
                          <thead><tr>{sec.table.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                          <tbody>{sec.table.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
                        </table>
                      </div>
                    )}
                    {sec.isTemplate && (
                      <div style={{ background: '#f9f7f2', border: '1px dashed #c5bfb0', padding: '20px', fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: '#5a5040', lineHeight: 2, whiteSpace: 'pre-wrap' }}>
                        {sec.body}
                      </div>
                    )}
                    {sec.isChecklist && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {sec.items.map((item, ii) => (
                          <div key={ii} style={{ display: 'flex', gap: '12px', fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: '#3a3025', lineHeight: 1.65, padding: '10px 0', borderBottom: ii < sec.items.length - 1 ? '1px solid #ede9df' : 'none' }}>
                            <span style={{ color: doc.color, fontSize: '16px', flexShrink: 0 }}>☐</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    {!sec.isTable && !sec.isTemplate && !sec.isChecklist && (
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: '#3a3025', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>{sec.body}</div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Doc nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #e0dbd0' }}>
          {activeDoc > 0
            ? <button onClick={() => switchDoc(activeDoc - 1)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: ACCENT, background: 'none', border: 'none', cursor: 'pointer' }}>← {docs[activeDoc - 1].title}</button>
            : <span />
          }
          {activeDoc < docs.length - 1
            ? <button onClick={() => switchDoc(activeDoc + 1)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: ACCENT, background: 'none', border: 'none', cursor: 'pointer' }}>{docs[activeDoc + 1].title} →</button>
            : <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: '#888' }}>🎉 You've completed the kit</div>
          }
        </div>
      </div>
    </div>
  )
}
