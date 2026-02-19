import { FiTarget, FiEye, FiAward, FiHeart } from 'react-icons/fi'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Valet Parking Company in Mumbai | Growmore Parking Solutions',
  description: 'Leading valet parking company in Mumbai, Navi Mumbai, Thane & Kalyan. Professional parking management services for corporates, malls, events & hotels across Maharashtra.',
  keywords: 'valet parking company Mumbai, parking management company, valet services provider Mumbai, professional parking solutions Mumbai',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="heading-1 text-white">About Growmore Parking Solutions</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Leading the transformation of parking management in India with innovative 
              solutions and exceptional service since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-2">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Growmore Parking Solutions Pvt Limited was founded with a vision to revolutionize 
                  the parking industry in India. We recognized the growing need for professional, 
                  technology-driven parking management solutions in an increasingly urbanized landscape.
                </p>
                <p>
                  Starting from humble beginnings, we have grown to become one of the most trusted 
                  names in valet parking and parking management services. Our journey has been marked 
                  by continuous innovation, unwavering commitment to quality, and a customer-first approach.
                </p>
                <p>
                  Today, we serve hundreds of clients across various sectors including corporate offices, 
                  shopping malls, residential complexes, hospitals, and commercial establishments. Our 
                  team of dedicated professionals works tirelessly to ensure that every parking experience 
                  is seamless, secure, and satisfactory.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card bg-primary-50 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
              </div>
              <div className="card bg-primary-50 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-gray-700 font-medium">Parking Sites</div>
              </div>
              <div className="card bg-primary-50 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Vehicles Daily</div>
              </div>
              <div className="card bg-primary-50 text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-700 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card bg-white">
              <div className="inline-block p-4 bg-primary-100 rounded-2xl text-primary-600 mb-6">
                <FiTarget size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide world-class parking management solutions that combine cutting-edge 
                technology with exceptional service, making parking a seamless experience for 
                everyone while maximizing efficiency and security for our clients.
              </p>
            </div>
            <div className="card bg-white">
              <div className="inline-block p-4 bg-primary-100 rounded-2xl text-primary-600 mb-6">
                <FiEye size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be India's most trusted and innovative parking solutions provider, setting 
                industry standards through technology integration, professional excellence, and 
                sustainable practices that contribute to smarter, more livable cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiAward size={36} />,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service delivery, continuously improving and innovating.'
              },
              {
                icon: <FiHeart size={36} />,
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices that build lasting trust.'
              },
              {
                icon: <FiTarget size={36} />,
                title: 'Customer Focus',
                description: 'Our clients\' success is our success. We listen, understand, and deliver solutions that exceed expectations.'
              },
              {
                icon: <FiEye size={36} />,
                title: 'Innovation',
                description: 'We embrace technology and creative thinking to stay ahead and provide cutting-edge solutions.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-block p-4 bg-primary-100 rounded-full text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Growmore?</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              What sets us apart in the parking management industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Years of successful operations with hundreds of satisfied clients across India.'
              },
              {
                title: 'Technology Leadership',
                description: 'Latest parking technology including ANPR, IoT sensors, and cloud platforms.'
              },
              {
                title: 'Professional Team',
                description: 'Trained, uniformed staff committed to delivering exceptional service.'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored parking solutions designed to meet your specific requirements.'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock customer support and operational assistance.'
              },
              {
                title: 'Competitive Pricing',
                description: 'Cost-effective solutions without compromising on quality or service.'
              }
            ].map((point, index) => (
              <div key={index} className="bg-primary-700 rounded-xl p-6 hover:bg-primary-800 transition">
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-primary-100 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and compliance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO Certified',
                description: 'ISO 9001:2015 certified for quality management systems'
              },
              {
                title: 'Industry Compliant',
                description: 'Adherent to all safety and regulatory standards'
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed operations with comprehensive insurance coverage'
              }
            ].map((cert, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-primary-100">
              Ready to experience the Growmore difference? Contact us today to discuss 
              how we can help transform your parking operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get in Touch
              </Link>
              <Link href="/services" className="bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
