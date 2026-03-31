import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: `Aviso legal de ${appConfig.title} conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI).`,
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
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
          <h1>Aviso Legal</h1>
          <p className="text-gray-500 text-sm">En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).</p>
          <h2>1. Datos identificativos</h2>
          <p>El presente sitio web <strong>{title}</strong> es un servicio digital de información y herramientas de cálculo, dirigido principalmente a usuarios en España y habla hispana.</p>
          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>Las presentes condiciones regulan el acceso y uso del sitio web, incluyendo los contenidos gratuitos (blog) y los servicios de pago (calculadora profesional).</p>
          <h2>3. Propiedad intelectual</h2>
          <p>Todos los contenidos son propiedad del titular o de sus licenciantes y están protegidos por las leyes de propiedad intelectual. Queda prohibida la reproducción sin autorización.</p>
          <h2>4. Condiciones de uso</h2>
          <p>El acceso a la calculadora requiere un pago único de <strong>4,99€</strong> via PayPal. Los cálculos son <strong>orientativos</strong> y el usuario asume la responsabilidad de su uso.</p>
          <h2>5. Exclusión de responsabilidad</h2>
          <p>El titular no se responsabiliza de los daños derivados del uso de las calculadoras. Los resultados no sustituyen el asesoramiento de un profesional.</p>
          <h2>6. Publicidad</h2>
          <p>Este sitio puede mostrar publicidad a través de <strong>Google AdSense</strong>, únicamente en páginas de contenido gratuito.</p>
          <h2>7. Legislación aplicable</h2>
          <p>Las presentes condiciones se rigen por la legislación española y cualquier controversia se somete a los tribunales españoles.</p>
        </article>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
