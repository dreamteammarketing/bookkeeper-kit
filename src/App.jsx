import { useState, useEffect } from 'react'
import SalesPage from './pages/SalesPage.jsx'
import AccessGate from './pages/AccessGate.jsx'
import KitPage from './pages/KitPage.jsx'

// ─── ACCESS CODE ────────────────────────────────────────────────────────────
// Set this in Vercel: Settings → Environment Variables → VITE_ACCESS_CODE
// Paste the same code into your Lemon Squeezy success email to buyers.
const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE || 'BOOKKEEPER2025'
const STORAGE_KEY = 'bk_kit_access'

export default function App() {
  const [page, setPage] = useState('sales')  // 'sales' | 'gate' | 'kit'
  const [unlocked, setUnlocked] = useState(false)

  // Check if buyer already authenticated this session
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === ACCESS_CODE) {
      setUnlocked(true)
    }
  }, [])

  // Read URL hash for navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#kit') {
        setPage(unlocked ? 'kit' : 'gate')
      } else if (hash === '#access') {
        setPage('gate')
      } else {
        setPage('sales')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [unlocked])

  const handleUnlock = (code) => {
    if (code.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      localStorage.setItem(STORAGE_KEY, ACCESS_CODE)
      setUnlocked(true)
      setPage('kit')
      window.location.hash = '#kit'
      return true
    }
    return false
  }

  const goToGate = () => {
    setPage('gate')
    window.location.hash = '#access'
  }

  const goToSales = () => {
    setPage('sales')
    window.location.hash = ''
  }

  if (page === 'kit' && unlocked) return <KitPage onBack={goToSales} />
  if (page === 'gate') return <AccessGate onUnlock={handleUnlock} onBack={goToSales} />
  return <SalesPage onAccessKit={goToGate} alreadyUnlocked={unlocked} onOpenKit={() => { setPage('kit'); window.location.hash = '#kit' }} />
}
