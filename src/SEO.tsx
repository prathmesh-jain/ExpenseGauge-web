import { useHead, useSeoMeta } from '@unhead/react'

const SITE_URL = 'https://expensegauge.prathmeshjain.in'

type SEOProps = {
  title: string
  description: string
  path: string
}

export default function SEO({
  title,
  description,
  path,
}: SEOProps) {
  const canonicalUrl = new URL(path, SITE_URL).toString()
  const imageUrl = `${SITE_URL}/expensegauge.jpg`

  useSeoMeta({
    title,
    description,
    ogType: 'website',
    ogSiteName: 'ExpenseGauge',
    ogUrl: canonicalUrl,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogImageAlt: 'ExpenseGauge personal expense tracking app',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  })

  return null
}