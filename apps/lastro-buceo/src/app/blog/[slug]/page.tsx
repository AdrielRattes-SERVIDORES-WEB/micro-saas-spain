import type { Metadata } from 'next'
import { BlogPostTemplate } from '@saas/ui/src/templates/BlogPostTemplate'
import { appConfig, articles } from '../../content'

const BASE_URL = 'https://saas-lastro-buceo-bu80cmlod.vercel.app'

interface Props {
  params: { slug: string }
}

function wordCount(html: string): number {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const url = `${BASE_URL}/blog/${article.slug}`
  const description = (article as any).excerpt || article.content.replace(/<[^>]+>/g, ' ').slice(0, 155)

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
      publishedTime: (article as any).publishedAt,
      images: (article as any).image
        ? [{ url: (article as any).image, width: 1200, height: 630, alt: (article as any).imageAlt || article.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: (article as any).image ? [(article as any).image] : undefined,
    },
    alternates: { canonical: url },
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return <div>Artículo no encontrado</div>

  const url = `${BASE_URL}/blog/${article.slug}`
  const a = article as any
  const description = a.excerpt || article.content.replace(/<[^>]+>/g, ' ').slice(0, 155)
  const wc = wordCount(article.content)
  const readingTime = Math.max(1, Math.round(wc / 200))

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description,
    url,
    inLanguage: 'es',
    wordCount: wc,
    timeRequired: `PT${readingTime}M`,
    datePublished: a.publishedAt || '2026-03-01',
    dateModified: a.publishedAt || '2026-03-01',
    image: a.image ? { '@type': 'ImageObject', url: a.image, width: 1200, height: 630 } : undefined,
    author: { '@type': 'Organization', name: appConfig.title, url: BASE_URL },
    publisher: { '@type': 'Organization', name: appConfig.title, url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: BASE_URL },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  }

  const faqJsonLd = a.faq?.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: a.faq.map((item: { q: string; a: string }) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <BlogPostTemplate
        {...appConfig}
        article={article}
        allArticles={articles}
        readingTime={readingTime}
      />
    </>
  )
}
