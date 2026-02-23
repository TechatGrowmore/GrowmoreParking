import Link from 'next/link'
import { FiCheckCircle, FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Valet Parking Services in Mumbai & Bandra | Professional Valet Attendants',
  description: 'Best valet parking services in Mumbai & Bandra West. Professional valet attendants for corporates, hotels, malls, events & residential complexes. Available 24/7. Call +91 93218 55377',
  keywords: 'valet parking Mumbai, valet parking Bandra, valet parking Bandra West, valet parking services Mumbai, best valet parking Mumbai, professional valet parking Mumbai, 24/7 valet parking Mumbai, corporate valet parking Mumbai, event valet parking Mumbai, hotel valet parking Mumbai',
  alternates: {
    canonical: 'https://www.growmoreparking.com/valet-parking-mumbai',
  },
}

export default function ValetParkingMumbai() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.growmoreparking.com' },
    { name: 'Services', url: 'https://www.growmoreparking.com/services' },
    { name: 'Valet Parking Mumbai', url: 'https://www.growmoreparking.com/valet-parking-mumbai' }
  ]

  const mumbaAreas = [
    'Bandra West', 'Bandra East', 'Andheri West', 'Andheri East',
    'Powai', 'BKC (Bandra Kurla Complex)', 'Lower Parel', 'Worli',
    'Parel', 'Dadar', 'Mahim', 'Khar', 'Santacruz',
    'Vile Parle', 'Juhu', 'Goregaon', 'Malad', 'Kandivali',
    'Borivali', 'Dahisar', 'Mulund', 'Ghatkopar', 'Vikhroli',
    'Kurla', 'Chembur', 'Wadala', 'Sion', 'Matunga',
    'Churchgate', 'Fort', 'Colaba', 'Nariman Point', 'Marine Drive'
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
                Serving All Mumbai Areas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Valet Parking Services in Mumbai
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert valet parking solutions across Mumbai including Bandra, Andheri, BKC, Powai, Lower Parel & more. 
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

      {/* Why Choose Us for Mumbai */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Growmore Valet Parking in Mumbai?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading corporates, hotels, and event organizers across Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Mumbai traffic patterns, parking challenges, and local requirements. Our team knows every corner of Mumbai from Bandra to Borivali.'
              },
              {
                title: 'Trained Professionals',
                description: 'All valet attendants are professionally trained, background-verified, and experienced in handling premium vehicles across Mumbai locations.'
              },
              {
                title: 'Quick Response Time',
                description: 'Based in Bandra West, we provide quick deployment across all Mumbai areas including BKC, Lower Parel, Andheri, Powai, and South Mumbai.'
              },
              {
                title: 'Multilingual Staff',
                description: 'Our valet attendants communicate fluently in English, Hindi, and Marathi to serve Mumbai\'s diverse clientele.'
              },
              {
                title: '24/7 Availability',
                description: 'Round-the-clock valet parking services available throughout Mumbai for corporates, hotels, events, and residential societies.'
              },
              {
                title: 'Insurance Coverage',
                description: 'Comprehensive insurance coverage for all vehicles under our care, ensuring peace of mind for Mumbai customers.'
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

      {/* Areas We Serve in Mumbai */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Valet Parking Services Across All Mumbai Areas
            </h2>
            <p className="text-xl text-gray-600">
              We provide professional valet parking services in every corner of Mumbai
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mumbaAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <FiMapPin className="text-primary-600 mx-auto mb-2" size={20} />
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area? We serve the entire Mumbai Metropolitan Region. 
              <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 ml-2">
                Contact us for details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services for Different Sectors in Mumbai */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Valet Parking Solutions for Every Sector in Mumbai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Corporate Valet Parking Mumbai',
                areas: 'BKC, Lower Parel, Worli, Andheri, Powai, Goregaon',
                description: 'Professional valet services for corporate offices, IT parks, and business centers across Mumbai. Streamline employee and visitor parking with our dedicated valet team.',
                features: ['Employee parking management', 'Visitor valet services', 'Reserved parking slots', 'Digital ticketing system']
              },
              {
                title: 'Hotel Valet Parking Mumbai',
                areas: 'Juhu, Bandra, Andheri, Marine Drive, Colaba, BKC',
                description: 'Premium valet parking for 5-star hotels, restaurants, and hospitality venues. Enhance guest experience with our professional uniformed valet attendants.',
                features: ['VIP guest handling', '24/7 service', 'Luxury vehicle expertise', 'Concierge-level service']
              },
              {
                title: 'Event Valet Parking Mumbai',
                areas: 'All Mumbai - Weddings, Corporate Events, Parties',
                description: 'Specialized valet parking for weddings, corporate events, exhibitions, and functions across Mumbai. Flexible staffing based on event size and requirements.',
                features: ['Event coordination', 'Peak hour management', 'Flexible staffing', 'Quick vehicle retrieval']
              },
              {
                title: 'Mall & Commercial Valet Parking',
                areas: 'Phoenix Mall, High Street Phoenix, R City Mall, Inorbit Mall',
                description: 'Enhance customer experience at shopping malls, retail centers, and commercial complexes with efficient valet parking services.',
                features: ['Customer satisfaction focus', 'Quick turnaround', 'Professional appearance', 'Brand enhancement']
              },
              {
                title: 'Residential Valet Parking Mumbai',
                areas: 'Bandra, Juhu, Powai, Worli, BKC, Prabhadevi',
                description: 'Convenient valet parking for luxury residential societies and apartment complexes. Solve parking challenges in Mumbai\'s high-rise buildings.',
                features: ['Resident parking management', 'Guest valet services', 'Security protocols', 'Space optimization']
              },
              {
                title: 'Healthcare Valet Parking',
                areas: 'Hospitals and Clinics across Mumbai',
                description: 'Compassionate valet parking services for hospitals, clinics, and healthcare facilities. Help patients and visitors with hassle-free parking.',
                features: ['Elderly assistance', 'Emergency priority', 'Patient-focused service', 'Accessibility support']
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

      {/* Office Location Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our Mumbai Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in Bandra West - Easily accessible from all Mumbai areas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.670725085615!2d72.83504536214903!3d19.058415771760004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917d9966f6d%3A0x376ea0726785ccff!2sGopal%20Mansion%20B%2C%20Gurunanak%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1771508997738!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Growmore Parking Solutions Office - Bandra West, Mumbai"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FiMapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Head Office Address</h3>
                    <p className="text-gray-600">
                      Gopal Mansion CHS., Office No. 67-B<br />
                      Ground Floor, Gurunanak Road<br />
                      Bandra West, Mumbai - 400 050<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FiPhone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Numbers</h3>
                    <p className="text-gray-600">
                      Primary: <a href="tel:+919321855377" className="text-primary-600 font-semibold hover:underline">+91 93218 55377</a><br />
                      Secondary: <a href="tel:+919321554553" className="text-primary-600 font-semibold hover:underline">+91 93215 54553</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FiMail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email Addresses</h3>
                    <p className="text-gray-600">
                      Sales: <a href="mailto:sales@growmoreparking.com" className="text-primary-600 font-semibold hover:underline">sales@growmoreparking.com</a><br />
                      Support: <a href="mailto:ravin@growmoreparking.com" className="text-primary-600 font-semibold hover:underline">ravin@growmoreparking.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-xl shadow-md text-white">
                <h3 className="font-bold text-lg mb-3">How to Reach Us</h3>
                <ul className="space-y-2 text-primary-50">
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="mt-1 flex-shrink-0" size={16} />
                    <span>5 min walk from Bandra Railway Station (Western Line)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="mt-1 flex-shrink-0" size={16} />
                    <span>Easy access from Western Express Highway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheckCircle className="mt-1 flex-shrink-0" size={16} />
                    <span>Parking available near the office</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Parking in Mumbai?
            </h2>
            <p className="text-xl text-primary-100">
              Get professional valet parking services across Mumbai. Contact us today for a free consultation and quote.
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
            <div className="pt-4">
              <p className="text-primary-100">
                Office: Gopal Mansion CHS., Office No. 67-B, Ground Floor, Gurunanak Road, Bandra (W), Mumbai - 400 050
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
