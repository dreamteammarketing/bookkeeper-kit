import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MemberDashboard from './pages/MemberDashboard.jsx'

const STORAGE_KEY = 'wayraps_member'

function loadMember() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function saveMember(member) {
  if (member) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(member))
  } else {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export default function App() {
  const [page, setPage] = useState('landing')
  const [selectedTier, setSelectedTier] = useState(null)
  const [member, setMember] = useState(loadMember)

  // Hash-based routing
  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.replace('#', '') || 'landing'
      if (hash === 'dashboard' && member) {
        setPage('dashboard')
      } else if (hash === 'signup') {
        setPage('signup')
      } else if (hash === 'login') {
        setPage('login')
      } else if (hash === 'dashboard' && !member) {
        setPage('login')
      } else {
        setPage('landing')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [member])

  function navigate(target, tierId) {
    if (tierId) setSelectedTier(tierId)
    if (target === 'dashboard' && !member) {
      target = 'login'
    }
    window.location.hash = target === 'landing' ? '' : target
    setPage(target)
    window.scrollTo(0, 0)
  }

  function handleSignUp(data) {
    const newMember = {
      name: data.name,
      email: data.email,
      tier: data.tier,
      joinedAt: new Date().toISOString(),
    }
    setMember(newMember)
    saveMember(newMember)
    navigate('dashboard')
  }

  function handleLogin(data) {
    // In a real app this would validate against a backend.
    // For demo, check if there is a stored member with matching email.
    const stored = loadMember()
    if (stored && stored.email === data.email) {
      setMember(stored)
      navigate('dashboard')
    } else {
      // Demo: create a session with the login email
      const demoMember = {
        name: data.email.split('@')[0],
        email: data.email,
        tier: 'listener',
        joinedAt: new Date().toISOString(),
      }
      setMember(demoMember)
      saveMember(demoMember)
      navigate('dashboard')
    }
  }

  function handleLogout() {
    setMember(null)
    saveMember(null)
    navigate('landing')
  }

  function handleUpgrade(tierId) {
    if (member) {
      const updated = { ...member, tier: tierId }
      setMember(updated)
      saveMember(updated)
    }
  }

  switch (page) {
    case 'signup':
      return (
        <SignUpPage
          onNavigate={navigate}
          selectedTier={selectedTier}
          onSignUp={handleSignUp}
        />
      )
    case 'login':
      return (
        <LoginPage
          onNavigate={navigate}
          onLogin={handleLogin}
        />
      )
    case 'dashboard':
      return member ? (
        <MemberDashboard
          member={member}
          onNavigate={navigate}
          onLogout={handleLogout}
          onUpgrade={handleUpgrade}
        />
      ) : (
        <LoginPage onNavigate={navigate} onLogin={handleLogin} />
      )
    default:
      return <LandingPage onNavigate={navigate} />
  }
}
