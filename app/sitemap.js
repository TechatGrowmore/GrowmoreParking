export default function sitemap() {
  const baseUrl = process.env.SITE_URL || 'https://www.growmoreparking.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/valet-parking-mumbai',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/services' || route === '/valet-parking-mumbai' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/valet-parking-mumbai' ? 0.95 : route === '/services' ? 0.9 : 0.8,
  }))
}
