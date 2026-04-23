import type { Metadata } from 'next'
import './globals.css'
import { CookieBanner } from '../components/CookieBanner'
import { appConfig } from './content'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`

export const metadata: Metadata = {
  title: {
    default: `${appConfig.title} | ${appConfig.tagline}`,
    template: `%s | ${appConfig.title}`,
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
  alternates: { canonical: BASE_URL, languages: { 'es-ES': BASE_URL } },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${appConfig.title} | ${appConfig.tagline}`,
      template: `%s | ${appConfig.title}`,
    },
    description: appConfig.description,
  },
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
