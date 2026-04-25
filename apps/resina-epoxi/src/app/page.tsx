import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'resinaepoxi.site'}`

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: 'Calculadora de Resina Epoxi para Mesas de Río | Peso, Proporción A:B y Coste',
  description:
    'Calcula exactamente cuánta resina epoxi necesitas para tu mesa de río: peso total, proporción A:B, capas recomendadas y coste estimado. Sin estimaciones. Sin desperdicio.',
  keywords: [
    'calculadora resina epoxi',
    'calculo de resina epoxica',
    'calculadora epoxi',
    'calcular cantidad resina epoxi',
    'proporcion ab resina epoxi',
    'cuanta resina epoxi necesito',
    'calcular resina para mesa de rio',
  ],
  openGraph: {
    title: 'Calculadora de Resina Epoxi para Mesas de Río',
    description:
      'Calcula el peso exacto, proporción A:B, capas y coste de resina epoxi para tu mesa de río. Pago único 4,99€.',
    url: BASE_URL,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Calculadora de Resina Epoxi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Resina Epoxi para Mesas de Río',
    description:
      'Calcula el peso exacto, proporción A:B, capas y coste de resina epoxi. Pago único 4,99€.',
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

/* ─────────────── SCHEMA.ORG ─────────────── */
const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Calculadora de Resina Epoxi',
  url: BASE_URL,
  description:
    'Herramienta de cálculo profesional para artesanos que fabrican mesas de río con resina epoxi en España.',
  inLanguage: 'es',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/blog/{search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const schemaSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Resina Epoxi',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  url: `${BASE_URL}/dashboard`,
  description:
    'Calculadora profesional para mesas de río: calcula peso de resina epoxi, proporción A:B exacta, número de capas, coste estimado y merma según temperatura del taller.',
  offers: {
    '@type': 'Offer',
    price: '4.99',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2027-12-31',
  },
  featureList: [
    'Cálculo de peso exacto de resina epoxi',
    'Proporción A:B automática por fabricante',
    'Ajuste por temperatura del taller',
    'Cálculo por capas según grosor máximo',
    'Coste estimado total',
    'Merma incluida',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '38',
    bestRating: '5',
  },
  inLanguage: 'es',
  author: { '@type': 'Organization', name: 'Calculadora de Resina Epoxi', url: BASE_URL },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se calcula cuánta resina epoxi necesito para una mesa de río?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para calcular la cantidad de resina epoxi necesitas multiplicar el volumen del canal (largo × ancho × grosor en cm) y convertirlo a litros (dividir entre 1000). Luego multiplicas por la densidad de la resina (normalmente entre 1,05 y 1,15 kg/L). Añade un 10% de merma. El resultado es el peso total de mezcla. Nuestra calculadora hace este proceso automáticamente incluyendo la proporción A:B y el ajuste por temperatura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo calculo la proporción A:B de la resina epoxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La proporción A:B se calcula siempre por PESO, no por volumen. Si la proporción es 100:50, necesitas 100g de resina (Parte A) y 50g de endurecedor (Parte B) para cada 150g de mezcla total. Por ejemplo, si necesitas 5 kg totales con proporción 100:50: la Parte A es 3,33 kg y la Parte B es 1,67 kg. Nunca mezcles por volumen ya que las densidades de A y B son distintas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas capas de resina epoxi necesito para una mesa de río?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El número de capas depende del grosor del canal y del tipo de resina. Las resinas de recubrimiento (Top Coat) permiten como máximo 1 cm por capa. Las resinas de vertido profundo (Deep Pour) permiten entre 5 y 10 cm por capa. Divide el grosor total del canal entre el máximo por capa de tu resina para obtener el número mínimo de capas necesarias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué debo pesar la resina en lugar de medirla por volumen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Parte A (resina) y la Parte B (endurecedor) tienen densidades distintas. 100 ml de resina no pesa lo mismo que 100 ml de endurecedor. Si mezclas por volumen en vez de peso, la proporción molecular estará desequilibrada y la resina no curará correctamente: quedará blanda, pegajosa, amarillará prematuramente o generará una reacción exotérmica peligrosa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo afecta la temperatura del taller al cálculo de resina epoxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mayor temperatura, la reacción química se acelera y el grosor máximo por capa debe reducirse para evitar sobrecalentamiento. A temperaturas altas (>25°C) debes reducir el grosor máximo por vertido en un 20-30%. A bajas temperaturas (<15°C) la resina se espesa, atrapa burbujas y puede tardar el doble en curar. Nuestra calculadora aplica estos ajustes automáticamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la calculadora de resina epoxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La calculadora tiene un precio de 4,99€ de pago único. Sin suscripción, acceso de por vida. El pago se realiza de forma segura a través de PayPal.',
      },
    },
  ],
}

const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Guías técnicas de resina epoxi para mesas de río',
  url: BASE_URL,
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: `${BASE_URL}/blog/cuanta-resina-necesito-mesa-rio`,
      name: '¿Cuánta Resina Epoxi Necesito para mi Mesa de Río? Cálculo Exacto',
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: `${BASE_URL}/blog/proporcion-ab-resina`,
      name: 'Proporción A:B Correcta y por qué NO puedes aproximarla',
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: `${BASE_URL}/blog/evitar-burbujas-resina-epoxi-guia-expertos`,
      name: 'Cómo Evitar Burbujas en la Resina Epoxi: La Guía Definitiva',
    },
    {
      '@type': 'ListItem',
      position: 4,
      url: `${BASE_URL}/blog/calcular-volumen-exacto-resina-epoxi-mesas-rio`,
      name: 'Cómo Calcular el Volumen Exacto de Resina Epoxi para Mesas de Río',
    },
    {
      '@type': 'ListItem',
      position: 5,
      url: `${BASE_URL}/blog/reaccion-exotermica-temperatura-curado-resina-epoxi`,
      name: 'Por Qué tu Resina Hierve y Humea: El Peligro de la Reacción Exotérmica',
    },
    {
      '@type': 'ListItem',
      position: 6,
      url: `${BASE_URL}/blog/lijado-pulido-epoxi`,
      name: 'Cómo Lijar y Pulir Resina Epoxi hasta conseguir Espejo',
    },
  ],
}

/* ─────────────── ARTICLES DATA ─────────────── */
const featuredArticles = [
  {
    slug: 'cuanta-resina-necesito-mesa-rio',
    category: 'CÁLCULO',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: '¿Cuánta Resina Epoxi Necesito para mi Mesa de Río? Cálculo Exacto',
    excerpt:
      'Aprende a calcular el peso exacto de resina epoxi para tu mesa sin estimaciones ni desperdicio.',
  },
  {
    slug: 'proporcion-ab-resina',
    category: 'TÉCNICA',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'Proporción A:B Correcta y por qué NO puedes aproximarla',
    excerpt:
      'La diferencia entre pesar y medir por volumen puede arruinar tu proyecto. Aquí está la explicación completa.',
  },
  {
    slug: 'evitar-burbujas-resina-epoxi-guia-expertos',
    category: 'ERRORES',
    categoryColor: 'bg-red-100 text-red-700',
    title: 'Cómo Evitar Burbujas en la Resina Epoxi: Guía Definitiva',
    excerpt:
      'Las burbujas arruinan semanas de trabajo. Descubre las técnicas profesionales para eliminarlas.',
  },
  {
    slug: 'calcular-volumen-exacto-resina-epoxi-mesas-rio',
    category: 'CÁLCULO',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Cómo Calcular el Volumen Exacto de Resina Epoxi para Mesas de Río',
    excerpt:
      'Fórmula paso a paso para calcular litros y kilogramos de resina antes de comprar.',
  },
  {
    slug: 'reaccion-exotermica-temperatura-curado-resina-epoxi',
    category: 'TÉCNICA',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'Reacción Exotérmica: Por Qué tu Resina Hierve y Cómo Evitarlo',
    excerpt:
      'El sobrecalentamiento destruye mesas de cientos de euros. Entiende la física detrás.',
  },
  {
    slug: 'lijado-pulido-epoxi',
    category: 'ACABADOS',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Cómo Lijar y Pulir Resina Epoxi hasta conseguir Espejo',
    excerpt:
      'La secuencia correcta de granos de lija y los productos de pulido para acabado espejo profesional.',
  },
]

/* ─────────────── PAGE ─────────────── */
export default function Page() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftware) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />

      <div className="min-h-screen bg-white text-gray-900 font-sans">

        {/* ── NAVBAR ── */}
        <nav className="bg-[#1a3a5c] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
            <span aria-hidden="true">🧪</span>
            <span>Calculadora Resina Epoxi</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog/cuanta-resina-necesito-mesa-rio" className="hidden md:block text-sm text-blue-200 hover:text-white transition-colors">
              Guías gratis
            </Link>
            <Link
              href="/checkout"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              📊 Usar Calculadora
            </Link>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="bg-[#1a3a5c] text-white px-6 py-20 md:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Herramienta profesional para carpinteros
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              ¿Cuánta resina epoxi necesitas para tu mesa de río?
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Calcula la cantidad exacta de resina epoxi: peso, proporción A:B, capas y coste.{' '}
              <strong className="text-white">Sin estimaciones. Sin desperdicio.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                href="/checkout"
                className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-100"
              >
                Calcular ahora — 4,99€
              </Link>
              <a
                href="#como-funciona"
                className="text-blue-200 hover:text-white underline underline-offset-4 text-sm transition-colors"
              >
                Ver cómo funciona ↓
              </a>
            </div>
            <p className="text-blue-300 text-sm">
              Pago único · Sin suscripción · Acceso de por vida
            </p>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-gray-50 border-b border-gray-200 px-6 py-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Cálculo de densidad de resina epoxi incluido',
              'Proporción A:B exacta por fabricante',
              'Ajuste automático por temperatura del taller',
              'Cálculo por metro cuadrado o proyecto completo',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-amber-500 font-bold text-base mt-0.5">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-4">
            Qué obtienes con la calculadora Pro
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Introduce las medidas de tu canal y obtén todos los datos que necesitas antes de comprar la resina.
          </p>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
            {/* Browser bar mockup */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-400 flex-1">
                resinaepoxi.site/dashboard
              </div>
            </div>
            {/* Calculator content */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Largo (cm)', value: '180' },
                  { label: 'Ancho (cm)', value: '25' },
                  { label: 'Grosor (cm)', value: '4' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs text-gray-500 mb-1 block">{field.label}</label>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono text-gray-700">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1a3a5c] rounded-xl p-5 text-white">
                <div className="text-xs text-blue-300 uppercase tracking-widest mb-3 font-semibold">
                  Resultado del cálculo
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Resina total</div>
                    <div className="text-2xl font-extrabold text-amber-400">5,18 kg</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Con merma (10%)</div>
                    <div className="text-xl font-bold text-white">5,70 kg</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Parte A</div>
                    <div className="text-xl font-bold text-white">3,45 kg</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Parte B</div>
                    <div className="text-xl font-bold text-white">1,73 kg</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Capas recomendadas</div>
                    <div className="text-xl font-bold text-white">3 capas</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-blue-200 mb-1">Coste estimado</div>
                    <div className="text-xl font-bold text-amber-400">62,16€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="como-funciona" className="bg-gray-50 px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-4">
              Cómo calcular cuánta resina epoxi necesitas
            </h2>
            <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
              Tres pasos para obtener el cálculo exacto de resina para tu mesa de río.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Introduce las medidas',
                  desc: 'Largo, ancho y grosor del canal en centímetros. Puedes calcular por secciones o el proyecto completo.',
                },
                {
                  num: '02',
                  title: 'Selecciona tu resina',
                  desc: 'Elige la proporción A:B de tu fabricante y la temperatura actual del taller para el ajuste automático.',
                },
                {
                  num: '03',
                  title: 'Obtén el cálculo exacto',
                  desc: 'Peso total, gramos de A y B, número de capas, merma y coste final. Listos para comprar sin errores.',
                },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="text-7xl font-extrabold text-gray-100 mb-2 leading-none select-none">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-4">
            Todo lo que calcula la herramienta
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Diseñada para carpinteros que hacen mesas de río en España. Sin aproximaciones.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '⚖️',
                title: 'Peso exacto de resina',
                desc: 'Calcula los kg precisos aplicando la densidad real de la resina, no estimaciones por volumen.',
              },
              {
                icon: '🧪',
                title: 'Proporción A:B automática',
                desc: 'Gramos exactos de resina y endurecedor según la proporción de tu fabricante.',
              },
              {
                icon: '📏',
                title: 'Cálculo por capas',
                desc: 'Divide automáticamente en capas según el grosor máximo por vertido de tu resina.',
              },
              {
                icon: '💶',
                title: 'Coste total estimado',
                desc: 'Introduce el precio por kg de tu resina y obtén el coste total antes de comprar.',
              },
              {
                icon: '🌡️',
                title: 'Ajuste por temperatura',
                desc: 'Corrección automática del cálculo según la temperatura actual del taller.',
              },
              {
                icon: '📦',
                title: 'Merma incluida',
                desc: 'Añade el porcentaje de desperdicio recomendado para no quedarte corto de resina.',
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{feat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA ── */}
        <section className="bg-amber-50 border-y border-amber-100 px-6 py-14 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-3">
              Herramienta profesional
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Deja de estimar a ojo. Compra exactamente lo que necesitas.
            </h2>
            <p className="text-gray-600 mb-8">
              El error de cálculo más común en mesas de río es comprar resina de más o de menos.
              Con nuestra calculadora obtienes el número exacto antes de gastar dinero.
            </p>
            <Link
              href="/checkout"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              💳 Obtener Acceso Pro — 4,99€
            </Link>
            <p className="text-gray-400 text-sm mt-4">Pago único · Sin suscripción · Acceso de por vida</p>
          </div>
        </section>

        {/* ── BLOG ARTICLES ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-3">
            Guías técnicas gratuitas
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Todo lo que necesitas saber sobre resina epoxi para mesas de río
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <span className={`text-xs font-bold px-2 py-1 rounded-full self-start mb-4 ${article.categoryColor}`}>
                  {article.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-3 leading-snug flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-[#1a3a5c] font-semibold text-sm hover:text-amber-600 transition-colors"
                >
                  Leer artículo →
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog/que-es-resina-epoxi-mesas"
              className="text-gray-500 hover:text-gray-800 text-sm underline underline-offset-4 transition-colors"
            >
              Ver todas las guías →
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-4">
              Preguntas frecuentes sobre el cálculo de resina epoxi
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              Las dudas más comunes antes de empezar una mesa de río
            </p>
            <div className="space-y-4">
              {schemaFAQ.mainEntity.map((faq) => (
                <details
                  key={faq.name}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm group"
                >
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-start gap-4 hover:text-[#1a3a5c] transition-colors">
                    <span>{faq.name}</span>
                    <span className="text-amber-500 font-bold text-lg mt-0.5 flex-shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-[#1a3a5c] text-white px-6 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Calcula exactamente cuánta resina epoxi necesitas
            </h2>
            <p className="text-blue-200 mb-4 text-lg">
              Peso total · Proporción A:B · Capas · Coste estimado · Merma · Ajuste por temperatura
            </p>
            <div className="text-6xl font-extrabold text-amber-400 mb-2">4,99€</div>
            <p className="text-blue-300 text-sm mb-10">Pago único · Sin suscripción · Acceso de por vida</p>
            <Link
              href="/checkout"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105"
            >
              💳 Obtener acceso — 4,99€
            </Link>
            <p className="text-blue-400 text-xs mt-6">
              Pago seguro vía PayPal · Acceso instantáneo
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-gray-900 text-gray-400 px-6 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span aria-hidden="true">🧪</span>
              <span>Calculadora de Resina Epoxi</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {[
                { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
                { href: '/contacto', label: 'Contacto' },
                { href: '/privacidad', label: 'Privacidad' },
                { href: '/cookies', label: 'Cookies' },
                { href: '/aviso-legal', label: 'Aviso Legal' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-gray-600">© 2026 Calculadora de Resina Epoxi</p>
          </div>
        </footer>
      </div>
    </>
  )
}
