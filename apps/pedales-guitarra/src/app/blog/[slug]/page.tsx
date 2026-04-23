import type { Metadata } from 'next'
import { BlogPostTemplate } from '@saas/ui/src/templates/BlogPostTemplate'
import { appConfig, articles } from '../../content'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

function getExcerpt(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
}

function extractFAQs(html: string) {
  const faqMatch = html.match(/Preguntas Frecuentes<\/h[23]>([\s\S]*?)(?=<h2|$)/i)
  if (!faqMatch) return []
  const pairs = [...faqMatch[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)]
  return pairs.map((m) => ({
    '@type': 'Question',
    name: m[1].replace(/<[^>]+>/g, '').trim(),
    acceptedAnswer: { '@type': 'Answer', text: m[2].replace(/<[^>]+>/g, '').trim() },
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`
  const description = article.excerpt || getExcerpt(article.content)
  const url = `${BASE_URL}/blog/${article.slug}`

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      url,
      type: 'article',
      locale: 'es_ES',
      siteName: appConfig.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
    },
    alternates: { canonical: url },
  }
}

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return <div>Artículo no encontrado</div>

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`
  const description = article.excerpt || getExcerpt(article.content)
  const url = `${BASE_URL}/blog/${article.slug}`
  const datePublished = article.publishedAt || new Date().toISOString().split('T')[0]

  const faqs = extractFAQs(article.content)

  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    inLanguage: 'es',
    author: { '@type': 'Organization', name: appConfig.title },
    publisher: { '@type': 'Organization', name: appConfig.title },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const faqLd = faqs.length > 0
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <BlogPostTemplate
        {...appConfig}
        article={article}
        allArticles={articles}
      />
    </>
  )
}
