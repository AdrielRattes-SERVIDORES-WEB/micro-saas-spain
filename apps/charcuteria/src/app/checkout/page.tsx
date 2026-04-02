import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'

export default function CheckoutPage() {
  return (
    <CheckoutTemplate
      title="Calculadora de Charcutería"
      emoji="🥩"
      tagline="Curar embutidos con precisión química y seguridad total"
      accentColor="#8B1A1A"
      appSlug="charcuteria"
      paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'}
    />
  )
}
