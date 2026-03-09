import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Valet Parking Services in Pune | Professional Valet Attendants | Growmore Parking',
  description: 'Best valet parking services in Pune — Koregaon Park, Baner, Hinjewadi, Kothrud, Viman Nagar & more. Professional valet attendants for corporates, hotels, malls, events & residential complexes. Available 24/7. Call +91 93218 55377',
  keywords: 'valet parking Pune, valet parking services Pune, professional valet parking Pune, best valet parking Pune, best valet parking company Pune, valet parking Hinjewadi, valet parking Hinjewadi Phase 1, valet parking Hinjewadi Phase 2, valet parking Hinjewadi Phase 3, valet parking Baner, valet parking Balewadi, valet parking Wakad, valet parking Pimpri, valet parking Chinchwad, valet parking Nigdi, valet parking Koregaon Park, valet parking Viman Nagar, valet parking Kalyani Nagar, valet parking Nagar Road, valet parking Kothrud, valet parking Karve Nagar, valet parking Warje, valet parking Erandwane, valet parking Shivajinagar, valet parking Deccan, valet parking FC Road, valet parking JM Road, valet parking Camp, valet parking Pashan, valet parking Aundh, valet parking Pimple Saudagar, valet parking Hadapsar, valet parking Magarpatta, valet parking Kharadi, valet parking Wagholi, valet parking Kondhwa, valet parking Undri, valet parking Mundhwa, corporate valet parking Pune, IT park parking Pune, event valet parking Pune, wedding valet parking Pune, hotel valet parking Pune, 5-star hotel valet Pune, restaurant valet parking Pune, banquet valet parking Pune, mall valet parking Pune, society parking management Pune, residential valet parking Pune, stack parking Pune, managed parking services Pune, parking management company Pune, parking contractor Pune, valet attendants Pune, uniformed valet staff Pune, 24/7 valet parking Pune, luxury valet parking Pune, VIP valet parking Pune',
  alternates: {
    canonical: 'https://growmoreparking.com/valet-parking-pune',
  },
}

export default function ValetParkingPune() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://growmoreparking.com' },
    { name: 'Services', url: 'https://growmoreparking.com/services' },
    { name: 'Valet Parking Pune', url: 'https://growmoreparking.com/valet-parking-pune' }
  ]

  const puneAreas = [
    'Hinjewadi IT Park', 'Baner', 'Balewadi', 'Wakad', 'Pimpri-Chinchwad',
    'Koregaon Park', 'Viman Nagar', 'Kalyani Nagar', 'Nagar Road',
    'Kothrud', 'Karve Nagar', 'Warje', 'Erandwane',
    'Shivajinagar', 'Deccan', 'FC Road', 'Camp', 'Laxmi Road',
    'Pashan', 'Sus Road', 'Aundh', 'Pimple Saudagar',
    'Hadapsar', 'Magarpatta', 'Kharadi', 'Wagholi',
    'Kondhwa', 'Wanowrie', 'NIBM Road', 'Undri'
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                <FiMapPin className="inline mr-2" />
                Serving All Pune Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Valet Parking Services in Pune
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert valet parking solutions across Pune including Hinjewadi, Baner, Koregaon Park, Viman Nagar & more.
              Professional attendants available 24/7 for corporates, hotels, malls, events & residential complexes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition inline-flex items-center gap-2">
                Get Free Quote <FiArrowRight />
              </Link>
              <a href="tel:+919321855377" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Call +91 93218 55377
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Pune */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Growmore Valet Parking in Pune?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading IT companies, hotels, and event organizers across Pune
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'IT Park Expertise',
                description: 'Specialized valet parking solutions for Hinjewadi, Baner, Kharadi, and Magarpatta IT parks. We understand the scale and peak-hour challenges of tech campuses.'
              },
              {
                title: 'Trained Professionals',
                description: 'All valet attendants are professionally trained, background-verified, and experienced in handling premium vehicles across Pune locations.'
              },
              {
                title: 'Quick Deployment',
                description: 'Fast setup and deployment across all Pune areas. Whether it\'s a corporate office or a wedding venue in Koregaon Park, we\'re ready.'
              },
              {
                title: 'Multilingual Staff',
                description: 'Our valet attendants communicate fluently in English, Hindi, and Marathi to serve Pune\'s diverse corporate and local clientele.'
              },
              {
                title: '24/7 Availability',
                description: 'Round-the-clock valet parking services available throughout Pune for corporates, hotels, events, and residential societies. No event too late.'
              },
              {
                title: 'Insurance Coverage',
                description: 'Comprehensive insurance coverage for all vehicles under our care, ensuring complete peace of mind for Pune customers.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve in Pune */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Valet Parking Services Across All Pune Areas
            </h2>
            <p className="text-xl text-gray-600">
              We provide professional valet parking services in every corner of Pune
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {puneAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <FiMapPin className="text-primary-600 mx-auto mb-2" size={20} />
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don&apos;t see your area? We serve the entire Pune Metropolitan Region.
              <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 ml-2">
                Contact us for details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services for Different Sectors in Pune */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Valet Parking Solutions for Every Sector in Pune
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Corporate Valet Parking Pune',
                areas: 'Hinjewadi, Baner, Kharadi, Magarpatta, Viman Nagar, Balewadi',
                description: 'Professional valet services for IT parks, corporate offices, and tech campuses across Pune. Manage large fleets of employee and visitor vehicles efficiently.',
                features: ['IT park fleet management', 'Visitor valet services', 'Reserved parking slots', 'Digital ticketing system']
              },
              {
                title: 'Hotel Valet Parking Pune',
                areas: 'Koregaon Park, Bund Garden, Camp, Kalyani Nagar',
                description: 'Premium valet parking for 5-star hotels, resorts, restaurants, and premium cafes in Pune. Elevate your guest experience with professional uniformed valet attendants.',
                features: ['VIP guest handling', '24/7 service', 'Luxury vehicle expertise', 'Concierge-level service']
              },
              {
                title: 'Event Valet Parking Pune',
                areas: 'All Pune — Weddings, Corporate Events, Banquets, Parties',
                description: 'Specialized valet parking for weddings, corporate events, sangeets, receptions, and functions across Pune. Flexible staffing based on event scale.',
                features: ['Event coordination', 'Peak hour management', 'Flexible staffing', 'Quick vehicle retrieval']
              },
              {
                title: 'Mall & Commercial Valet Parking',
                areas: 'Phoenix Marketcity, Amanora Mall, Seasons Mall, SGS Mall',
                description: 'Enhance customer experience at shopping malls, multiplexes, retail centers, and commercial complexes with efficient valet parking services.',
                features: ['Customer satisfaction focus', 'Quick turnaround', 'Professional appearance', 'Brand enhancement']
              },
              {
                title: 'Residential Valet Parking Pune',
                areas: 'Koregaon Park, Kalyani Nagar, Baner, Wakad, Kharadi',
                description: 'Convenient valet parking for luxury residential societies and gated communities. Solve parking challenges in Pune\'s premium high-rise apartments.',
                features: ['Resident parking management', 'Guest valet services', 'Security protocols', 'Space optimization']
              },
              {
                title: 'Stack Parking Pune',
                areas: 'Offices, Malls, Residential Complexes across Pune',
                description: 'Mechanical stack parking solutions to maximize parking capacity in space-constrained commercial and residential properties in Pune.',
                features: ['Space efficiency', 'Mechanical parking systems', 'Trained operators', 'Maintenance support']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-4">
                  <FiMapPin className="inline mr-1" />
                  {service.areas}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FiCheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '24/7', label: 'Service Available' },
              { value: '100%', label: 'Vehicle Safety' },
              { value: '500+', label: 'Events Covered' },
              { value: '10+', label: 'Years of Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions — Valet Parking Pune</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do you provide valet parking in Hinjewadi IT Park?',
                a: 'Yes, we provide professional valet parking services for IT parks, corporate offices, and tech campuses in Hinjewadi, Phase 1, Phase 2, and Phase 3.'
              },
              {
                q: 'Can you handle valet parking for large events in Pune?',
                a: 'Absolutely. We have managed valet parking for events ranging from 50 to 500+ vehicles. We deploy trained attendants based on your event size and duration.'
              },
              {
                q: 'What is the minimum booking for valet parking in Pune?',
                a: 'We cater to events and facilities of all sizes. Contact us with your requirements and we will provide a customized quote.'
              },
              {
                q: 'How quickly can you deploy a valet team in Pune?',
                a: 'For planned events, we recommend booking at least 1 week in advance. For urgent requirements, please call us directly — we will do our best to accommodate.'
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Parking in Pune?
            </h2>
            <p className="text-xl text-primary-100">
              Get professional valet parking services across Pune. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition inline-flex items-center gap-2">
                <FiMail />
                Get Free Quote
              </Link>
              <a href="tel:+919321855377" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center gap-2">
                <FiPhone />
                Call +91 93218 55377
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
