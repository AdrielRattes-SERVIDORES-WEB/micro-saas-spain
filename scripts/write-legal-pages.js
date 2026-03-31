const fs = require('fs')
const path = require('path')

const BASE = 'C:/Users/noteb/micro-saas-spain/apps'
const APPS = [
  'aceitunas','astrofotografia','camper-electrica','charcuteria','corte-madera',
  'cuidado-bonsai','fondeo-veleros','impresion-3d','lastro-buceo','marroquineria',
  'mezcla-tintas','pedales-guitarra','perfumeria-botanica','resina-epoxi','salmuera-quesos'
]

const files = {
  'src/app/privacidad/page.tsx': `import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: \`Política de privacidad de \${appConfig.title}. Información sobre el tratamiento de datos personales conforme al RGPD.\`,
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
`,

  'src/app/cookies/page.tsx': `import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: \`Información sobre el uso de cookies en \${appConfig.title}, incluyendo Google AdSense y Analytics.\`,
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
`,

  'src/app/contacto/page.tsx': `import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Contacto',
  description: \`Contacta con el equipo de \${appConfig.title} para preguntas, sugerencias o ejercer tus derechos de protección de datos.\`,
}

export default function ContactoPage() {
  const { title, accentColor, emoji, appSlug } = appConfig
  const contactEmail = \`hola.\${appSlug}@gmail.com\`
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
          <form action={\`https://formsubmit.co/\${contactEmail}\`} method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value={\`Contacto desde \${title}\`} />
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
`,

  'src/app/sobre-nosotros/page.tsx': `import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: \`Conoce el equipo detrás de \${appConfig.title}. Creamos herramientas de cálculo precisas para aficionados y profesionales en España.\`,
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
`,

  'src/app/aviso-legal/page.tsx': `import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: \`Aviso legal de \${appConfig.title} conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI).\`,
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
`,

  'src/app/layout.tsx': `import type { Metadata } from 'next'
import './globals.css'
import { CookieBanner } from '../components/CookieBanner'
import { appConfig } from './content'

const BASE_URL = \`https://\${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}\`

export const metadata: Metadata = {
  title: {
    default: \`\${appConfig.title} | \${appConfig.tagline}\`,
    template: \`%s | \${appConfig.title}\`,
  },
  description: appConfig.description,
  authors: [{ name: appConfig.title }],
  openGraph: {
    siteName: appConfig.title,
    locale: 'es_ES',
    type: 'website',
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
`,

  'src/app/page.tsx': `import type { Metadata } from 'next'
import { BlogFeedTemplate } from '@saas/ui/src/templates/BlogFeedTemplate'
import { appConfig, articles } from './content'

const BASE_URL = \`https://\${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}\`

export const metadata: Metadata = {
  title: \`\${appConfig.title} — Blog\`,
  description: appConfig.description,
  openGraph: {
    title: \`\${appConfig.title} — Blog\`,
    description: appConfig.description,
    url: BASE_URL,
    type: 'website',
    locale: 'es_ES',
    siteName: appConfig.title,
  },
  alternates: { canonical: BASE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: appConfig.title,
  url: BASE_URL,
  description: appConfig.description,
  inLanguage: 'es',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogFeedTemplate {...appConfig} articles={articles} />
    </>
  )
}
`,

  'src/app/sitemap.ts': `import { MetadataRoute } from 'next'
import { articles } from './content'

const BASE_URL = \`https://\${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}\`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...articles.map((article) => ({
      url: \`\${BASE_URL}/blog/\${article.slug}\`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: \`\${BASE_URL}/checkout\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]
}
`,

  'src/app/robots.ts': `import { MetadataRoute } from 'next'

const BASE_URL = \`https://\${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}\`

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/dashboard'] },
    sitemap: \`\${BASE_URL}/sitemap.xml\`,
  }
}
`,
}

// Structural files to copy from lastro-buceo to other apps
const STRUCTURAL_FILES = [
  'src/app/aviso-legal/page.tsx',
  'src/app/privacidad/page.tsx',
  'src/app/cookies/page.tsx',
  'src/app/contacto/page.tsx',
  'src/app/sobre-nosotros/page.tsx',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
]

let written = 0
let skipped = 0

for (const app of APPS) {
  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(BASE, app, filePath)
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    // Never overwrite content.ts
    if (filePath.endsWith('content.ts')) { skipped++; continue }

    fs.writeFileSync(fullPath, content, 'utf8')
    written++
  }

  // Copy CookieBanner component
  const bannerSrc = path.join(BASE, 'lastro-buceo/src/components/CookieBanner.tsx')
  const bannerDest = path.join(BASE, app, 'src/components/CookieBanner.tsx')
  if (fs.existsSync(bannerSrc)) {
    const bannerDir = path.dirname(bannerDest)
    if (!fs.existsSync(bannerDir)) fs.mkdirSync(bannerDir, { recursive: true })
    fs.copyFileSync(bannerSrc, bannerDest)
    written++
  }
}

console.log(`Done: ${written} files written, ${skipped} skipped`)
