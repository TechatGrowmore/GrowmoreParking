import { FiCheckCircle, FiUsers } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Valet Parking Services in Mumbai, Navi Mumbai, Thane | Growmore Parking Solutions',
  description: 'Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan & Bandra for corporates, malls, events, hotels & residential complexes. Trained valet attendants available 24/7.',
  keywords: 'valet parking services Mumbai, valet parking Navi Mumbai, valet parking Thane, corporate valet parking, event valet services, hotel valet parking, mall valet parking, residential valet parking, valet attendants Mumbai',
}

export default function Services() {
  const services = [
    {
      id: 'valet',
      icon: <FiUsers size={48} />,
      title: 'Professional Valet Parking Services',
      description: 'Premium valet parking services with highly trained professionals ensuring exceptional customer experience for all types of facilities.',
      features: [
        'Highly trained and courteous valet attendants',
        'Uniformed staff with ID badges',
        'Quick and efficient vehicle handling',
        'Insurance coverage for all vehicles',
        'Real-time vehicle tracking',
        'Digital ticketing system',
        'Customer satisfaction guarantee',
        'Event-specific valet services',
        'Peak hour traffic management',
        'VIP and premium vehicle handling',
        '24/7 service availability',
        'Multi-location support'
      ],
      benefits: [
        'Enhanced customer experience',
        'Reduced parking time',
        'Professional brand image',
        'Hassle-free parking management',
        'Increased customer satisfaction',
        'Space optimization'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* <div className="inline-block mb-4">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Currently Available
              </span>
            </div> */}
            <h1 className="heading-1 text-white">Professional Valet Parking Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our flagship service: Exceptional valet parking solutions for corporates, malls, events, and hospitality. 
              Trained professionals ensuring seamless parking experience for your guests and customers.
            </p>
            {/* <p className="text-lg text-primary-200">
              <strong>More innovative solutions launching soon!</strong> Stay tuned for exciting new offerings.
            </p> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block p-4 bg-primary-100 rounded-2xl text-primary-600">
                    {service.icon}
                  </div>
                  <h2 className="heading-2">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Key Benefits</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <FiCheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary inline-block">
                    Get Quote for This Service
                  </Link>
                </div>

                {service.id === 'valet' ? (
                  // Special valet parking image gallery
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Featured Attendant Image */}
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-4">
                      <Image 
                        src="/Valet/5.webp" 
                        alt="Professional valet attendants in uniform" 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-block bg-green-500 px-2 py-1 rounded text-xs font-semibold text-white mb-2">
                          Our Team
                        </div>
                        <p className="text-white font-semibold">Professional Valet Attendants</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src="/Valet/1.webp" 
                          alt="Valet parking slot signage" 
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src="/Valet/image1.webp" 
                          alt="Two-wheeler parking management" 
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src="/Valet/3.webp" 
                          alt="Organized bike parking slots" 
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src="/Valet/4.webp" 
                          alt="Car parking valet service" 
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-gray-900">Features Included</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard features box for other services
                  <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Features Included</h3>
                    <div className="grid gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                          <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features & Technology */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">What We Bring to Your Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional equipment and trained staff for superior valet parking experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Uniforms',
                description: 'Branded uniforms with ID badges for all valet attendants ensuring professional appearance'
              },
              {
                title: 'Digital Ticketing',
                description: 'Modern ticketing systems with barcode tracking for quick vehicle retrieval'
              },
              {
                title: 'Vehicle Tracking',
                description: 'Real-time tracking system to locate and retrieve vehicles efficiently'
              },
              {
                title: 'Insurance Coverage',
                description: 'Comprehensive insurance for all vehicles under our care for complete peace of mind'
              },
              {
                title: 'Communication Devices',
                description: 'Walkie-talkies and mobile devices for seamless team coordination'
              },
              {
                title: 'Safety Equipment',
                description: 'Traffic cones, barriers, and signage for organized parking operations'
              },
              {
                title: 'Training Program',
                description: 'Continuous training for staff on customer service and safe vehicle handling'
              },
              {
                title: 'Reporting System',
                description: 'Daily reports on parking operations, vehicle count, and customer feedback'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock management support for any operational requirements'
              }
            ].map((tech, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expanding Our Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                While valet parking is our current specialty, we're actively developing more innovative 
                parking and facility management solutions to serve you better.
              </p>
              <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
                <p className="text-primary-600 font-semibold">Want to be the first to know about our new services?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready for Professional Valet Services?</h2>
            <p className="text-xl text-primary-100">
              Let's discuss your valet parking requirements and design a service plan 
              that perfectly fits your facility's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
                Schedule Consultation
              </Link>
              <a href="https://wa.me/919321855377?text=Hi%2C%20I'm%20interested%20in%20your%20professional%20valet%20parking%20services.%20I%20would%20like%20to%20discuss%20my%20requirements." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
