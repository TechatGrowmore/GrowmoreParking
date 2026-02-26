export default function OrganizationSchema() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Growmore Parking Solutions Pvt Limited",
    "alternateName": "Growmore Parking",
    "url": "https://www.growmoreparking.com",
    "logo": "https://www.growmoreparking.com/logo/logo.webp",
    "description": "Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan and Bandra for corporates, malls, events, hotels and residential complexes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gopal Mansion CHS., Office No. 67-B, Ground Floor, Gurunanak Road",
      "addressLocality": "Bandra West",
      "addressRegion": "Mumbai, Maharashtra",
      "postalCode": "400050",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-93218-55377",
        "contactType": "customer service",
        "areaServed": ["IN"],
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-93215-54553",
        "contactType": "sales",
        "areaServed": ["IN"],
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    ],
    "email": "sales@growmoreparking.com",
    "sameAs": [
      "https://www.growmoreparking.com",
      "https://www.facebook.com/profile.php?id=61561549145462",
      "https://www.instagram.com/growwmoreparking/",
      "https://x.com/GrowwmoreP38654",
      "https://www.linkedin.com/in/growmoreparking-undefined-80384539b"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0596",
      "longitude": "72.8295"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Navi Mumbai"
      },
      {
        "@type": "City",
        "name": "Thane"
      },
      {
        "@type": "City",
        "name": "Kalyan"
      },
      {
        "@type": "City",
        "name": "Bandra"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Valet Parking Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Corporate Valet Parking Mumbai",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Valet Parking Services",
                "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Kalyan"]
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Event Valet Parking Mumbai",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Event & Wedding Valet Parking",
                "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Kalyan"]
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Hotel Valet Parking Mumbai",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hotel & Restaurant Valet Parking",
                "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Kalyan"]
              }
            }
          ]
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  )
}
