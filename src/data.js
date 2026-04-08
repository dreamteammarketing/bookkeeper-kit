export const BRAND = {
  name: 'Way Raps',
  tagline: 'Your All-Access Pass to the Music',
};

export const COLORS = {
  bg: '#0a0a0a',
  bgCard: '#111111',
  bgCardHover: '#1a1a1a',
  bgSection: '#060606',
  gold: '#D4AF37',
  goldLight: '#F0D060',
  purple: '#8B5CF6',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A0A0',
  textMuted: '#666666',
  border: '#222222',
  borderLight: '#333333',
  success: '#22C55E',
  tierFree: '#A0A0A0',
  tierFan: '#3B82F6',
  tierSupporter: '#8B5CF6',
  tierInner: '#D4AF37',
};

export const TIERS = [
  {
    id: 'listener',
    name: 'The Listener',
    price: 0,
    priceLabel: 'Free',
    color: COLORS.tierFree,
    description: 'Get started with Way Raps and join the community.',
    features: [
      'Standard quality streaming',
      'Way Raps newsletter',
      'Community forum access',
      'Public playlist access',
    ],
    cta: 'Join Free',
  },
  {
    id: 'fan',
    name: 'The Fan',
    price: 9.99,
    priceLabel: '$9.99/mo',
    color: COLORS.tierFan,
    description: 'Unlock lossless audio and exclusive early access.',
    popular: false,
    features: [
      'Lossless audio streaming (FLAC)',
      '2 music downloads per month',
      '10% merch discount',
      'Early access to new releases',
      'Ad-free listening experience',
      'Exclusive wallpapers & assets',
    ],
    cta: 'Become a Fan',
  },
  {
    id: 'supporter',
    name: 'The Supporter',
    price: 29.99,
    priceLabel: '$29.99/mo',
    color: COLORS.tierSupporter,
    popular: true,
    description: 'Go deeper with unlimited downloads and behind-the-scenes access.',
    features: [
      'Everything in The Fan',
      'Unlimited music downloads',
      '25% merch discount',
      'Behind-the-scenes content',
      'Monthly Q&A livestream',
      'Exclusive unreleased tracks',
      'Supporter badge & shoutouts',
    ],
    cta: 'Become a Supporter',
  },
  {
    id: 'inner-circle',
    name: 'The Inner Circle',
    price: 99.99,
    priceLabel: '$99.99/mo',
    color: COLORS.tierInner,
    description: 'The ultimate experience — coaching, meet & greets, and more.',
    features: [
      'Everything in The Supporter',
      'Exclusive meet & greet (quarterly)',
      '1-on-1 music career coaching call (monthly)',
      '40% merch discount',
      'Signed merchandise (annually)',
      'Private community channel access',
      'Credits on upcoming projects',
      'Priority event access & VIP seating',
    ],
    cta: 'Join the Inner Circle',
  },
];

export const FEATURES_HIGHLIGHT = [
  {
    icon: '🎵',
    title: 'Lossless Streaming',
    desc: 'Crystal-clear FLAC audio. Hear every beat, every layer, exactly as intended.',
  },
  {
    icon: '⬇️',
    title: 'Music Downloads',
    desc: 'Own the music. Download tracks to keep forever, available offline anywhere.',
  },
  {
    icon: '🛍️',
    title: 'Merch Discounts',
    desc: 'Up to 40% off exclusive Way Raps merchandise and limited drops.',
  },
  {
    icon: '🤝',
    title: 'Meet & Greet',
    desc: 'Quarterly exclusive meet & greet events with Way Raps — in person or virtual.',
  },
  {
    icon: '🎤',
    title: 'Career Coaching',
    desc: 'Monthly 1-on-1 coaching calls to level up your own music career.',
  },
  {
    icon: '🔓',
    title: 'Exclusive Content',
    desc: 'Unreleased tracks, behind-the-scenes footage, and early access to everything.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Marcus J.',
    tier: 'The Inner Circle',
    text: "The coaching calls alone are worth it. Way helped me land my first feature and I've grown so much as an artist. This community is unreal.",
    avatar: 'M',
  },
  {
    name: 'Aaliyah R.',
    tier: 'The Supporter',
    text: "I've been a fan since day one but having access to unreleased tracks and the monthly Q&As makes me feel like I'm part of the journey. Love this.",
    avatar: 'A',
  },
  {
    name: 'Devon K.',
    tier: 'The Fan',
    text: "The lossless streaming quality is insane. Once you hear it in FLAC you can't go back. Plus the early access drops are always fire.",
    avatar: 'D',
  },
];

export const FAQ = [
  {
    q: 'Can I switch tiers at any time?',
    a: 'Absolutely. You can upgrade or downgrade your membership at any time. When upgrading, you get immediate access to new benefits. When downgrading, your current tier stays active until the end of your billing cycle.',
  },
  {
    q: 'How do the music downloads work?',
    a: 'Fan members get 2 downloads per month, while Supporter and Inner Circle members get unlimited downloads. Downloads are high-quality FLAC or MP3 files that are yours to keep forever.',
  },
  {
    q: 'What format is the lossless streaming?',
    a: 'We stream in FLAC format at up to 24-bit/96kHz. You\'ll need a decent pair of headphones or speakers to really appreciate the difference, but once you hear it, there\'s no going back.',
  },
  {
    q: 'How do meet & greets work?',
    a: 'Inner Circle members get access to quarterly meet & greet events. These alternate between in-person events in major cities and virtual hangouts. You\'ll get advance notice and priority registration.',
  },
  {
    q: 'What are the career coaching calls?',
    a: 'Inner Circle members can book a monthly 1-on-1 call with Way to discuss your music career — whether it\'s production, marketing, branding, or strategy. Calls are 30 minutes and scheduled at your convenience.',
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'No contracts, no commitments. All memberships are month-to-month and you can cancel anytime. We want you here because you want to be here.',
  },
  {
    q: 'How do merch discounts work?',
    a: 'Your discount is automatically applied at checkout in the Way Raps merch store when you\'re logged in. Fan members get 10%, Supporters get 25%, and Inner Circle members get 40% off everything.',
  },
];
