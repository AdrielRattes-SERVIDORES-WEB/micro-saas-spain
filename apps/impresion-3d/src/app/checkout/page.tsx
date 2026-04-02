import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'
export default function CheckoutPage() {
  return <CheckoutTemplate title="Calculadora Impresión 3D" emoji="🖨️" tagline="Precio real con el coste de luz en España incluido" accentColor="#2563EB" appSlug="impresion-3d" paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'} />
}
