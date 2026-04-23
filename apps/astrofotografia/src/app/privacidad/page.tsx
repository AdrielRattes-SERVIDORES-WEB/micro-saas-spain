import type { Metadata } from 'next'
import { appConfig } from '../content'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`


export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/privacidad` },
  title: 'Política de Privacidad',
  description: `Política de privacidad de ${appConfig.title}. Información sobre el tratamiento de datos personales conforme al RGPD.`,
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  const { title, accentColor, emoji } = appConfig
  return (
    <div className="min-h-screen bg-gray-50">
      <nav style={{ backgroundColor: accentColor }} className="text-white py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span>{emoji}</span><span>{title}</span>
          </a>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <h1>Política de Privacidad</h1>
          <p className="text-gray-500 text-sm">Última actualización: marzo 2026</p>
          <h2>1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de sus datos personales es el titular del sitio web <strong>{title}</strong>, en cumplimiento del RGPD y la LOPDGDD.</p>
          <h2>2. Datos que recopilamos</h2>
          <ul>
            <li><strong>Navegación:</strong> IP, navegador, páginas visitadas (Google Analytics).</li>
            <li><strong>Pago:</strong> gestionado por <strong>PayPal</strong>. No almacenamos datos de tarjetas.</li>
            <li><strong>Cookies:</strong> propias y de terceros (Google AdSense, Analytics).</li>
          </ul>
          <h2>3. Base jurídica</h2>
          <p>Gestión de acceso: ejecución de contrato (art. 6.1.b RGPD). Analytics y publicidad: consentimiento (art. 6.1.a RGPD).</p>
          <h2>4. Derechos del usuario</h2>
          <p>Puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad y oposición a través de nuestra <a href="/contacto">página de contacto</a> o ante la <strong>AEPD</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
          <h2>5. Conservación de datos</h2>
          <p>Los datos de acceso se conservan el tiempo necesario para cumplir obligaciones legales. Los de navegación, máximo 26 meses.</p>
        </article>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
