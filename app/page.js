import Link from 'next/link'
import Image from 'next/image'
import { FiCheckCircle, FiUsers, FiTrendingUp, FiShield, FiClock, FiAward, FiArrowRight, FiStar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata = {
  title: 'Home | Growmore Parking Solutions - Professional Valet Parking Services',
  description: 'Transform your parking experience with Growmore Parking Solutions. Professional valet parking services for corporates, malls, events, and hospitality with trained staff and exceptional service.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        <AnimatedBackground />
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  #1 Valet Parking Service Provider
                </span>
              </div>
              <h1 className="heading-1">
                Transform Your Parking with
                <span className="text-primary-600"> Professional Valet Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional valet parking services with trained attendants 
                designed to optimize space, enhance customer experience, and elevate your brand.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  Get Started <FiArrowRight className="inline ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Solutions
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-600">Parking Sites</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[580px]">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-primary-600 rounded-3xl transform -rotate-3 opacity-10"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-6">
                <Image 
                  src="/Valet/image.webp" 
                  alt="Smart Parking Lot with Valet Services" 
                  width={520}
                  height={520}
                  className="object-contain w-full h-full drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose Growmore Valet Parking?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine professional service with trained staff to deliver 
              exceptional valet parking experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiShield className="text-primary-600" size={40} />,
                title: 'Enhanced Security',
                description: 'Comprehensive insurance coverage, trained staff, and secure parking protocols ensure maximum safety for your vehicles.'
              },
              {
                icon: <FiClock className="text-primary-600" size={40} />,
                title: '24/7 Operations',
                description: 'Round-the-clock valet parking services with dedicated staff available whenever you need them.'
              },
              {
                icon: <FiTrendingUp className="text-primary-600" size={40} />,
                title: 'Maximize Efficiency',
                description: 'Optimize parking space utilization and reduce congestion with our professional valet management.'
              },
              {
                icon: <FiUsers className="text-primary-600" size={40} />,
                title: 'Professional Staff',
                description: 'Highly trained and courteous valet attendants in uniform providing exceptional customer service at all times.'
              },
              {
                icon: <FiAward className="text-primary-600" size={40} />,
                title: 'Proven Track Record',
                description: 'Trusted by leading corporates, malls, hotels, and event venues across India for reliable valet service.'
              },
              {
                icon: <FiCheckCircle className="text-primary-600" size={40} />,
                title: 'Custom Solutions',
                description: 'Tailored valet parking services designed to meet your specific facility requirements and customer needs.'
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valet Parking Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Currently providing professional valet parking services across multiple sectors. More innovative solutions coming soon!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate & Office Complexes',
                description: 'Professional valet services for business centers, IT parks, and corporate offices ensuring smooth employee and visitor parking.',
                features: ['Employee Parking', 'Visitor Management', 'Reserved Slots', 'Quick Service']
              },
              {
                title: 'Malls & Commercial Spaces',
                description: 'Premium valet parking for shopping malls, restaurants, and commercial establishments to enhance customer experience.',
                features: ['Peak Hour Management', 'Customer Satisfaction', 'Brand Enhancement', 'Professional Staff']
              },
              {
                title: 'Events & Hospitality',
                description: 'Specialized valet services for hotels, banquets, weddings, and special events with trained and uniformed attendants.',
                features: ['Event Coordination', 'VIP Services', 'Flexible Staffing', 'Instant Setup']
              },
            ].map((service, index) => (
              <div key={index} className="card bg-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Available Now
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FiCheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl p-8 max-w-2xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl font-bold text-primary-700">More Solutions Coming Soon!</span>
                <span className="text-3xl">🚀</span>
              </div>
              <p className="text-gray-600 mb-4">
                We're expanding our services to bring you more innovative parking and facility management solutions.
              </p>
              <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                Get notified when we launch <FiArrowRight />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              View Valet Parking Details <FiArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Valet Parking in Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Valet Parking in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our professional valet parking services in operation - organized, efficient, and safe
            </p>
          </div>
          
          {/* Featured - Professional Valet Attendants */}
          <div className="mb-8">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image 
                src="/Valet/5.webp" 
                alt="Professional valet parking attendants in uniform providing excellent customer service" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-block bg-green-500 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Our Professional Team
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Professional Valet Attendants</h3>
                <p className="text-base text-gray-200 max-w-2xl">Trained, uniformed staff providing courteous and efficient valet parking services with attention to detail and customer satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/Valet/1.webp" 
                alt="Valet parking sign with organized parking slot numbering system" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Smart Parking Organization</h3>
                <p className="text-sm text-gray-200">Clear signage and systematic slot allocation for efficient vehicle management</p>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/Valet/image1.webp" 
                alt="Organized two-wheeler parking slots with clear markings" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Two-Wheeler Parking</h3>
                <p className="text-sm text-gray-200">Dedicated motorcycle parking with numbered allocations</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/Valet/3.webp" 
                alt="Well-marked bike parking slots in organized rows" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Systematic Layout</h3>
                <p className="text-sm text-gray-200">Professional line marking and slot numbering for easy navigation</p>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/Valet/4.webp" 
                alt="Overview of professional valet parking facility with organized car parking" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Premium Car Parking</h3>
                <p className="text-sm text-gray-200">Secure and spacious parking bays for all vehicle types</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 bg-primary-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700">Vehicle Safety</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-700">Active Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-2">Professional Valet Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine professional training, modern equipment, and exceptional service 
                to deliver superior valet parking experiences.
              </p>
              <div className="space-y-4">
                {[
                  'Trained & Certified Valet Attendants',
                  'Professional Uniforms & ID Badges',
                  'Digital Ticketing & Vehicle Tracking',
                  'Comprehensive Insurance Coverage',
                  'Real-time Communication Systems',
                  'Customer Service Excellence'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary-100 rounded-full p-2">
                      <FiCheckCircle className="text-primary-600" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Request Quote <FiArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-primary-50 border-2 border-primary-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-700 font-medium">Uptime</div>
              </div>
              <div className="card bg-primary-50 border-2 border-primary-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Vehicles/Day</div>
              </div>
              <div className="card bg-primary-50 border-2 border-primary-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">30%</div>
                <div className="text-gray-700 font-medium">Cost Reduction</div>
              </div>
              <div className="card bg-primary-50 border-2 border-primary-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Trusted by industry leaders across various sectors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                position: 'Facility Manager, Tech Corp',
                content: 'Growmore Parking Solutions transformed our corporate parking completely. The automated systems and professional staff have significantly improved our operations.',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                position: 'Mall Operations Head',
                content: 'Outstanding service! Their valet team is professional and the technology integration is seamless. Customer satisfaction has increased by 40%.',
                rating: 5
              },
              {
                name: 'Amit Patel',
                position: 'Society President',
                content: 'The best decision we made for our residential complex. Security has improved and parking management is now completely hassle-free.',
                rating: 5
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready for Professional Valet Parking?</h2>
            <p className="text-xl text-primary-100">
              Get in touch with us today for a free consultation and discover how our 
              valet services can enhance your customer experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request Quote
              </Link>
              <a href="https://wa.me/919321855377?text=Hello%20Growmore%20Parking%2C%20I%20would%20like%20to%20inquire%20about%20your%20professional%20valet%20parking%20services.%20Please%20provide%20more%20information." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                <FaWhatsapp size={20} />
                WhatsApp Us
              </a>
              <Link href="tel:+919321855377" className="bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
