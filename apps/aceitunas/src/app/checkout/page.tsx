import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'
export default function CheckoutPage() {
  return <CheckoutTemplate title="Calculadora Cura de Aceitunas" emoji="🫒" tagline="Elimina el amargor con precisión" accentColor="#5B7A3E" appSlug="aceitunas" paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'} />
}
