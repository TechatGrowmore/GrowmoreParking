export default function sitemap() {
  const baseUrl = process.env.SITE_URL || 'https://www.growmoreparking.com'

  const routes = [
    { path: '',                      freq: 'weekly',  priority: 1.0,  modified: '2026-03-01' },
    { path: '/services',             freq: 'weekly',  priority: 0.9,  modified: '2026-03-01' },
    { path: '/valet-parking-mumbai', freq: 'weekly',  priority: 0.95, modified: '2026-03-01' },
    { path: '/about',                freq: 'monthly', priority: 0.8,  modified: '2026-03-01' },
    { path: '/contact',              freq: 'monthly', priority: 0.8,  modified: '2026-03-01' },
  ]

  return routes.map(({ path, freq, priority, modified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: modified,
    changeFrequency: freq,
    priority,
  }))
}
