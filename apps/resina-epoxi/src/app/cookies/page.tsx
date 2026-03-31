import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Información sobre el uso de cookies en ${appConfig.title}, incluyendo Google AdSense y Analytics.`,
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
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
          <h1>Política de Cookies</h1>
          <p className="text-gray-500 text-sm">Última actualización: marzo 2026</p>
          <p>En cumplimiento con el artículo 22.2 de la LSSI y el RGPD, le informamos sobre el uso de cookies en este sitio web.</p>
          <h2>Cookies que utilizamos</h2>
          <table className="w-full border-collapse text-sm">
            <thead><tr>
              <th className="border border-gray-300 bg-gray-50 p-2 text-left">Cookie</th>
              <th className="border border-gray-300 bg-gray-50 p-2 text-left">Tipo</th>
              <th className="border border-gray-300 bg-gray-50 p-2 text-left">Finalidad</th>
              <th className="border border-gray-300 bg-gray-50 p-2 text-left">Duración</th>
            </tr></thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2">cookie_consent</td><td className="border border-gray-300 p-2">Propia</td><td className="border border-gray-300 p-2">Recordar elección</td><td className="border border-gray-300 p-2">1 año</td></tr>
              <tr><td className="border border-gray-300 p-2">_ga, _gid</td><td className="border border-gray-300 p-2">Terceros / Analítica</td><td className="border border-gray-300 p-2">Google Analytics</td><td className="border border-gray-300 p-2">2 años / 24h</td></tr>
              <tr><td className="border border-gray-300 p-2">DART, IDE</td><td className="border border-gray-300 p-2">Terceros / Publicidad</td><td className="border border-gray-300 p-2">Google AdSense</td><td className="border border-gray-300 p-2">2 años</td></tr>
            </tbody>
          </table>
          <h2>Cómo gestionar las cookies</h2>
          <p>Puede aceptar o rechazar las cookies no esenciales a través del banner en su primera visita, o configurar su navegador (Chrome, Firefox, Safari).</p>
          <h2>Publicidad de Google AdSense</h2>
          <p>Puede desactivar la publicidad personalizada en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google</a>.</p>
        </article>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
