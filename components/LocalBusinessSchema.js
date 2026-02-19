export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Growmore Parking Solutions Pvt Limited",
    "description": "Professional valet parking services for corporates, malls, events, and hospitality",
    "url": "https://www.growmoreparking.com",
    "telephone": "+91-93218-55377",
    "email": "sales@growmoreparking.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gopal Mansion CHS., Office No. 67-B, Ground Floor, Gurunanak Road",
      "addressLocality": "Bandra (W), Mumbai",
      "postalCode": "400050",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0596",
      "longitude": "72.8295"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Valet Parking",
      "Parking Management",
      "Event Parking Services",
      "Corporate Parking Solutions"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
