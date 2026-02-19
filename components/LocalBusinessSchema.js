export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Growmore Parking Solutions Pvt Limited",
    "description": "Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan and Bandra for corporates, malls, events, hotels and residential complexes",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra"
        }
      },
      {
        "@type": "City",
        "name": "Navi Mumbai",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra"
        }
      },
      {
        "@type": "City",
        "name": "Thane",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra"
        }
      },
      {
        "@type": "City",
        "name": "Kalyan",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra"
        }
      },
      {
        "@type": "City",
        "name": "Bandra",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra"
        }
      }
    ],
    "serviceType": [
      "Valet Parking Mumbai",
      "Valet Parking Navi Mumbai",
      "Valet Parking Thane",
      "Valet Parking Kalyan",
      "Parking Management",
      "Event Parking Services",
      "Corporate Parking Solutions",
      "Hotel Valet Parking",
      "Mall Valet Parking",
      "Residential Valet Parking"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Valet Parking Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Valet Parking Services Mumbai",
            "description": "Professional valet parking services in Mumbai with trained attendants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Valet Parking",
            "description": "Dedicated valet parking solutions for corporate offices and business centers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Valet Parking",
            "description": "Professional valet parking management for events, weddings, and functions"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
