'use client'
import React from 'react'
import { Footer } from '../components/Footer'

// Strip HTML tags and return first 160 chars
function getExcerpt(html: string): string {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > 160 ? text.slice(0, 157) + '...' : text
}

interface Article {
  slug: string
  title: string
  content: string
  excerpt?: string
  image?: string
  imageAlt?: string
}

interface BlogFeedTemplateProps {
  appSlug: string
  title: string
  emoji: string
  tagline: string
  description: string
  accentColor: string
  articles: Article[]
  price?: string
}

export function BlogFeedTemplate({
  appSlug,
  title,
  emoji,
  tagline,
  description,
  accentColor,
  articles,
  price = '4,99€',
}: BlogFeedTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav style={{ backgroundColor: accentColor }} className="text-white py-4 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="text-2xl">{emoji}</span>
            <span>{title}</span>
          </a>
          <a
            href="/dashboard"
            className="bg-white text-gray-900 font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            📊 Usar Calculadora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ backgroundColor: accentColor }} className="text-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg opacity-80 font-light">{tagline}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-4">{title} — Blog</h1>
          <p className="text-base opacity-70 max-w-2xl mx-auto">{description}</p>
        </div>
      </header>

      {/* Blog Feed */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Guías Técnicas</h2>
          <span className="text-sm text-gray-500">5 artículos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            const excerpt = article.excerpt || getExcerpt(article.content)
            return (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Card image area */}
                <div className="h-44 relative overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ backgroundColor: accentColor }} className="w-full h-full flex items-center justify-center">
                      <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">{emoji}</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    #{index + 1}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{excerpt}</p>
                  <div
                    style={{ color: accentColor }}
                    className="mt-4 text-sm font-semibold flex items-center gap-1"
                  >
                    Leer artículo <span>→</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm border border-gray-200 text-center">
          <div className="text-4xl mb-4">{emoji}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Listo para calcular con precisión?</h3>
          <p className="text-gray-600 mb-6">
            Deja de estimar a ojo. Accede a la calculadora profesional por un único pago de{' '}
            <span className="font-bold text-green-600">{price}</span>
          </p>
          <a
            href="/checkout"
            style={{ backgroundColor: accentColor }}
            className="inline-block text-white font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md text-lg"
          >
            💳 Obtener Acceso Pro — {price}
          </a>
          <p className="text-xs text-gray-400 mt-3">Pago único · Sin suscripción · Acceso de por vida</p>
        </div>
      </main>

      <Footer title={title} tagline={tagline} />
    </div>
  )
}
