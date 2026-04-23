import type { Metadata } from 'next'
import { BlogFeedTemplate } from '@saas/ui/src/templates/BlogFeedTemplate'
import { appConfig, articles } from './content'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`

export const metadata: Metadata = {
  title: `${appConfig.title} — Blog`,
  description: appConfig.description,
  openGraph: {
    title: `${appConfig.title} — Blog`,
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
