'use client'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            🍪 Usamos cookies propias y de terceros (Google AdSense, Analytics) para mejorar tu experiencia
            y mostrarte publicidad relevante. Puedes aceptar todas o solo las necesarias.{' '}
            <a href="/cookies" className="underline opacity-80 hover:opacity-100">
              Más información
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
          >
            Solo necesarias
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  )
}
