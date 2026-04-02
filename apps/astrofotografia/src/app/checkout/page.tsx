import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'
export default function CheckoutPage() {
  return <CheckoutTemplate title="Calculadora Astrofotografía NPF" emoji="🔭" tagline="Exposición máxima sin rastros de estrellas" accentColor="#1E1B4B" appSlug="astrofotografia" paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'} />
}
