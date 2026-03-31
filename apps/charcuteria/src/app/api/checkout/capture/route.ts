export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@saas/db/src/client'

const PAYPAL_BASE = process.env.PAYPAL_ENV === 'sandbox'
  ? 'https://api-m.sandbox.paypal.com'
  : 'https://api-m.paypal.com'

async function getPayPalToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID!
  const secret = process.env.PAYPAL_CLIENT_SECRET!
  const credentials = Buffer.from(`${clientId}:${secret}`).toString('base64')

  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  const data = await res.json()
  return data.access_token
}

export async function POST(req: NextRequest) {
  try {
    const { orderID, appSlug, email } = await req.json()

    // Capture payment on PayPal
    const token = await getPayPalToken()
    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    const capture = await res.json()

    if (capture.status !== 'COMPLETED') {
      return NextResponse.json({ success: false, error: 'Pago no completado.' }, { status: 400 })
    }

    const amount = parseFloat(
      capture.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value ?? '4.99'
    )

    // Save purchase to Supabase
    const supabase = createServerClient()
    await supabase.from('purchases').insert({
      app_slug: appSlug,
      email: email || 'unknown@example.com',
      paypal_order_id: orderID,
      amount,
      currency: 'EUR',
    })

    return NextResponse.json({
      success: true,
      accessToken: orderID,
      message: '¡Pago completado! Accediendo a la calculadora...',
    })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Error al procesar el pago.' }, { status: 500 })
  }
}
