import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'
export default function CheckoutPage() {
  return <CheckoutTemplate title="Calculadora de Resina Epoxi" emoji="🧪" tagline="Calcula exactamente cuánta resina necesitas" accentColor="#1B5E7B" appSlug="resina-epoxi" paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'} />
}
