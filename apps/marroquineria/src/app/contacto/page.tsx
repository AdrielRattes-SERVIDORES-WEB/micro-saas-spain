import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta con el equipo de ${appConfig.title} para preguntas, sugerencias o ejercer tus derechos de protección de datos.`,
}

export default function ContactoPage() {
  const { title, accentColor, emoji, appSlug } = appConfig
  const contactEmail = `hola.${appSlug}@gmail.com`
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Contacto</h1>
          <p className="text-gray-600 mb-8">¿Tienes una pregunta o quieres ejercer tus derechos de protección de datos? Escríbenos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-bold text-gray-900 mb-1">Correo electrónico</h3>
              <p className="text-sm text-gray-600">{contactEmail}</p>
              <p className="text-xs text-gray-400 mt-1">Respondemos en 24-48h laborables</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-bold text-gray-900 mb-1">Tiempo de respuesta</h3>
              <p className="text-sm text-gray-600">24-48 horas laborables</p>
            </div>
          </div>
          <form action={`https://formsubmit.co/${contactEmail}`} method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value={`Contacto desde ${title}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/contacto?enviado=true" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required placeholder="tu@email.com" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <select name="asunto" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none">
                <option>Pregunta técnica sobre la calculadora</option>
                <option>Problema con el acceso</option>
                <option>Sugerencia de mejora</option>
                <option>Derechos de protección de datos (RGPD)</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea name="mensaje" required rows={5} placeholder="Cuéntanos en qué podemos ayudarte..." className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none resize-none" />
            </div>
            <button type="submit" style={{ backgroundColor: accentColor }} className="w-full text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Enviar mensaje →</button>
          </form>
          <p className="text-xs text-gray-400 mt-4 text-center">Al enviar aceptas nuestra <a href="/privacidad" className="underline">Política de Privacidad</a>.</p>
        </div>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
