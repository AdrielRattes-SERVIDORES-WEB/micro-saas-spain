'use client'
import React from 'react'
import { Footer } from '../components/Footer'

interface Article {
  slug: string
  title: string
  content: string
  image?: string
  imageAlt?: string
  excerpt?: string
  publishedAt?: string
}

interface BlogPostTemplateProps {
  appSlug: string
  title: string
  emoji: string
  tagline: string
  accentColor: string
  article: Article
  allArticles: Article[]
  price?: string
  nicheLabel?: string
  readingTime?: number
}

function CTABox({ accentColor, title, price, nicheLabel }: { accentColor: string; title: string; price: string; nicheLabel: string }) {
  return (
    <div
      style={{ borderColor: accentColor }}
      className="my-10 p-6 bg-white rounded-2xl border-2 shadow-md"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-4xl">🧮</div>
        <div className="flex-1">
          <p className="font-bold text-gray-900 text-base leading-snug mb-1">
            ¿Quieres evitar errores en tu {nicheLabel}? Usa nuestra{' '}
            <span style={{ color: accentColor }}>Calculadora Profesional de {title}</span>.
            Acceso de por vida por solo{' '}
            <span className="text-green-600 font-extrabold">{price}</span>.
          </p>
          <p className="text-gray-500 text-sm">Sin suscripción. Pago único vía PayPal.</p>
        </div>
        <a
          href="/checkout"
          style={{ backgroundColor: accentColor }}
          className="shrink-0 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
        >
          Obtener Acceso Pro →
        </a>
      </div>
    </div>
  )
}

// Split HTML content roughly in half by paragraph count
function splitContent(html: string): [string, string] {
  const paragraphs = html.split(/(?<=<\/p>|<\/ul>|<\/h4>)/i)
  const mid = Math.ceil(paragraphs.length / 2)
  return [paragraphs.slice(0, mid).join(''), paragraphs.slice(mid).join('')]
}

export function BlogPostTemplate({
  appSlug,
  title,
  emoji,
  tagline,
  accentColor,
  article,
  allArticles,
  price = '4,99€',
  nicheLabel = 'proyecto',
  readingTime,
}: BlogPostTemplateProps) {
  const [firstHalf, secondHalf] = splitContent(article.content)
  const otherArticles = allArticles.filter((a) => a.slug !== article.slug)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav style={{ backgroundColor: accentColor }} className="text-white py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="text-xl">{emoji}</span>
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

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-2">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="hover:text-gray-700 transition-colors">Inicio</a>
          <span>/</span>
          <a href="/" className="hover:text-gray-700 transition-colors">Blog</a>
          <span>/</span>
          <span className="text-gray-800 font-medium line-clamp-1">{article.title}</span>
        </nav>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Article hero image */}
          {article.image ? (
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-8 py-6 text-white">
                <div className="text-xs font-semibold opacity-80 mb-2 uppercase tracking-wider">
                  {emoji} Guía Técnica
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow">{article.title}</h1>
                <div className="flex items-center gap-4 mt-3 text-xs opacity-80">
                  {article.publishedAt && (
                    <time dateTime={article.publishedAt}>
                      📅 {new Date(article.publishedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  )}
                  {readingTime && <span>⏱ {readingTime} min de lectura</span>}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ backgroundColor: accentColor }} className="px-8 py-10 text-white">
              <div className="text-sm font-semibold opacity-70 mb-3 uppercase tracking-wider">
                {emoji} Guía Técnica
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{article.title}</h1>
              <div className="flex items-center gap-4 mt-3 text-sm opacity-80">
                {article.publishedAt && (
                  <time dateTime={article.publishedAt}>
                    📅 {new Date(article.publishedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                )}
                {readingTime && <span>⏱ {readingTime} min de lectura</span>}
              </div>
            </div>
          )}

          {/* Article body */}
          <div className="px-8 py-8">
            {/* First half of content */}
            <div
              className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: firstHalf }}
            />

            {/* Mid-article CTA */}
            <CTABox accentColor={accentColor} title={title} price={price} nicheLabel={nicheLabel} />

            {/* Second half of content */}
            {secondHalf && (
              <div
                className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: secondHalf }}
              />
            )}

            {/* End CTA */}
            <CTABox accentColor={accentColor} title={title} price={price} nicheLabel={nicheLabel} />
          </div>
        </article>

        {/* Related articles */}
        {otherArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Más artículos del blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherArticles.slice(0, 4).map((a) => (
                <a
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                    {a.title}
                  </h3>
                  <span style={{ color: accentColor }} className="text-xs font-medium mt-2 block">
                    Leer →
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer title={title} tagline={tagline} />
    </div>
  )
}
