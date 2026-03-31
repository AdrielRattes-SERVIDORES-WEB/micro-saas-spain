import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: `Conoce el equipo detrás de ${appConfig.title}. Creamos herramientas de cálculo precisas para aficionados y profesionales en España.`,
}

export default function SobreNosotrosPage() {
  const { title, accentColor, emoji, tagline, nicheLabel } = appConfig
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
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">{emoji}</div>
            <h1 className="text-3xl font-extrabold">Sobre Nosotros</h1>
            <p className="text-gray-500">{tagline}</p>
          </div>
          <h2>¿Quiénes somos?</h2>
          <p>Somos un equipo apasionado por el mundo del <strong>{nicheLabel}</strong> con años de experiencia práctica en España. Conocemos de primera mano los problemas que surgen cuando se necesitan cálculos precisos y no se encuentra una herramienta fiable en español.</p>
          <h2>Por qué creamos esta calculadora</h2>
          <p><strong>{title}</strong> está diseñada específicamente para el contexto español: unidades del sistema métrico, terminología en castellano y casos de uso reales del ámbito del <strong>{nicheLabel}</strong>.</p>
          <h2>Nuestro compromiso</h2>
          <ul>
            <li>Contenido técnico <strong>gratuito y de calidad</strong> en el blog</li>
            <li>Herramienta de cálculo profesional a un <strong>precio único (4,99€)</strong></li>
            <li>Sin suscripciones, sin trucos, sin letra pequeña</li>
            <li>Actualizaciones sin coste adicional</li>
          </ul>
          <h2>Descargo de responsabilidad</h2>
          <p>Las calculadoras son herramientas de orientación. Los resultados son aproximados y deben validarse en la práctica real con un profesional cualificado.</p>
          <div style={{ borderColor: accentColor }} className="mt-8 p-6 border-2 rounded-xl text-center">
            <p className="font-bold text-gray-900 mb-3">¿Tienes preguntas o sugerencias?</p>
            <a href="/contacto" style={{ backgroundColor: accentColor }} className="inline-block text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Contáctanos</a>
          </div>
        </article>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
