export default function sitemap() {
  const baseUrl = process.env.SITE_URL || 'https://www.growmoreparking.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
  }))
}
