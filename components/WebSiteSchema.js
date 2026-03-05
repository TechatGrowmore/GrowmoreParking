export default function WebSiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Growmore Parking Solutions",
    "alternateName": "Growmore Parking",
    "url": "https://www.growmoreparking.com",
    "description": "Professional valet parking services in Mumbai, Navi Mumbai, Thane & Kalyan for corporates, malls, events, hotels and residential complexes.",
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.growmoreparking.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const siteNavSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      "Home",
      "About Us",
      "Our Services",
      "Valet Parking Mumbai",
      "Contact Us"
    ],
    "url": [
      "https://www.growmoreparking.com/",
      "https://www.growmoreparking.com/about",
      "https://www.growmoreparking.com/services",
      "https://www.growmoreparking.com/valet-parking-mumbai",
      "https://www.growmoreparking.com/contact"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
      />
    </>
  )
}
