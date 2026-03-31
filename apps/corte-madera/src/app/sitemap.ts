import { MetadataRoute } from 'next'
import { articles } from './content'

const BASE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...articles.map((article) => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/checkout`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]
}
