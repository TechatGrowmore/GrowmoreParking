export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you provide valet parking services in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Growmore Parking Solutions provides professional valet parking services across Mumbai, Navi Mumbai, Thane, Kalyan, and Bandra. We serve corporates, malls, events, hotels, and residential complexes with trained valet attendants available 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book valet parking services in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book our valet parking services by calling +91 93218 55377 or emailing sales@growmoreparking.com. We offer customized valet parking solutions for corporates, events, hotels, malls, and residential societies across Mumbai, Navi Mumbai, and Thane."
        }
      },
      {
        "@type": "Question",
        "name": "What types of valet parking services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive valet parking solutions including: Corporate Valet Parking, Event Valet Services, Hotel & Restaurant Valet Parking, Mall & Shopping Center Valet Services, Residential Complex Valet Parking, and Wedding & Party Valet Services across Mumbai, Navi Mumbai, Thane, and Kalyan."
        }
      },
      {
        "@type": "Question",
        "name": "Are your valet parking attendants trained and professional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our valet parking attendants are professionally trained, background-verified, and experienced in handling premium vehicles. They are skilled in courteous customer service and efficient parking management for corporate, event, and hospitality settings."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide 24/7 valet parking services in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Growmore Parking Solutions offers 24/7 valet parking services across Mumbai, Navi Mumbai, Thane, and Kalyan. We provide round-the-clock parking management for corporates, hotels, residential complexes, and events."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of valet parking services in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our valet parking service costs are customized based on your specific requirements including location, duration, number of attendants needed, and type of service (corporate, event, hotel, or residential). Contact us at +91 93218 55377 for a personalized quote for valet parking services in Mumbai, Navi Mumbai, or Thane."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide valet parking for events and weddings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in event valet parking services for weddings, corporate events, parties, and functions across Mumbai, Navi Mumbai, Thane, and Kalyan. Our professional valet team ensures smooth parking management for your guests."
        }
      },
      {
        "@type": "Question",
        "name": "Is vehicle insurance covered during valet parking service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain comprehensive insurance coverage for vehicles under our valet parking service. Our trained attendants handle all vehicles with utmost care and professionalism. Contact us for detailed information about our insurance coverage and safety protocols."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
