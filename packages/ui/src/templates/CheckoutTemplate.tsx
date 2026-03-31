'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Footer } from '../components/Footer'

interface CheckoutTemplateProps {
  title: string
  emoji: string
  tagline: string
  accentColor: string
  appSlug: string
  paypalClientId: string
  price?: string
  priceValue?: string
}

export function CheckoutTemplate({
  title,
  emoji,
  tagline,
  accentColor,
  appSlug,
  paypalClientId,
  price = '4,99€',
  priceValue = '4.99',
}: CheckoutTemplateProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const emailRef = useRef(email)

  useEffect(() => {
    emailRef.current = email
  }, [email])

  useEffect(() => {
    if (!paypalClientId || paypalClientId === 'PAYPAL_CLIENT_ID') return

    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=EUR&intent=capture`
    script.async = true
    script.onload = () => {
      if ((window as any).paypal) {
        (window as any).paypal.Buttons({
          createOrder: async () => {
            const res = await fetch('/api/checkout/create', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ appSlug, email: emailRef.current }),
            })
            const data = await res.json()
            return data.orderID
          },
          onApprove: async (data: any) => {
            setStatus('loading')
            const res = await fetch('/api/checkout/capture', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ orderID: data.orderID, appSlug, email: emailRef.current }),
            })
            const result = await res.json()
            if (result.success) {
              setStatus('success')
              setMessage(result.message || 'Pago completado. Redirigiendo...')
              localStorage.setItem(`access_${appSlug}`, result.accessToken)
              setTimeout(() => {
                window.location.href = `/dashboard?token=${result.accessToken}`
              }, 2000)
            } else {
              setStatus('error')
              setMessage(result.error || 'Error al procesar el pago.')
            }
          },
          onError: () => {
            setStatus('error')
            setMessage('Error en PayPal. Por favor, inténtalo de nuevo.')
          },
        }).render('#paypal-button-container')
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [paypalClientId, appSlug])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header style={{ backgroundColor: accentColor }} className="text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>{emoji}</span>
            <span>{title}</span>
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{emoji}</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Accede a {title}</h1>
            <p className="text-gray-600">{tagline}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Acceso completo a la calculadora</span>
              <span className="text-2xl font-bold text-green-600">{price}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Pago único · Sin suscripción · Acceso de por vida</div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tu email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Recibirás el acceso en este email</p>
          </div>

          {status === 'idle' && (
            <div id="paypal-button-container" className="min-h-[50px]" />
          )}

          {status === 'loading' && (
            <div className="text-center py-6">
              <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600">Procesando pago...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center py-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-green-700 text-lg">¡Pago completado!</p>
              <p className="text-gray-600 text-sm mt-1">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-3">❌</div>
              <p className="font-bold text-red-700">Error en el pago</p>
              <p className="text-gray-600 text-sm mt-2">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-blue-600 underline text-sm"
              >
                Intentar de nuevo
              </button>
            </div>
          )}

          <div className="mt-6 flex justify-center gap-4 text-xs text-gray-400">
            <span>🔒 Pago seguro</span>
            <span>💳 PayPal</span>
            <span>🌍 Aceptamos tarjetas</span>
          </div>
        </div>
      </main>

      <Footer title={title} tagline={tagline} />
    </div>
  )
}
