export default function robots() {
  const baseUrl = process.env.SITE_URL || 'https://www.growmoreparking.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
