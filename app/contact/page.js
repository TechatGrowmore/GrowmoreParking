'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry from ${formData.name} – Growmore Parking`,
          from_name: 'Growmore Parking Website',
          to_email: 'sales@growmoreparking.com',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'N/A',
          city: formData.city || 'N/A',
          solution_interested: formData.service,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', city: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 6000)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="heading-1 text-white">Get in Touch</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Have a question or want to discuss your parking requirements? 
              We're here to help. Reach out to us and let's get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="e.g. Mumbai, Delhi, Pune"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Solution Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  >
                    <option value="">Select a solution</option>
                    <option value="valet">Valet Parking Solutions</option>
                    <option value="corporate">Corporate Parking Solutions</option>
                    <option value="automated">Automated Parking Systems</option>
                    <option value="management">Parking Management Solutions</option>
                    <option value="residential">Residential Parking Solutions</option>
                    <option value="smart">Smart Parking Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your parking requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Enquiry
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-lg">
                    <FiCheckCircle className="mt-0.5 flex-shrink-0 text-green-600" size={20} />
                    <div>
                      <p className="font-semibold">Enquiry sent successfully!</p>
                      <p className="text-sm text-green-700 mt-0.5">Our team at sales@growmoreparking.com will get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-lg">
                    <FiAlertCircle className="mt-0.5 flex-shrink-0 text-red-600" size={20} />
                    <div>
                      <p className="font-semibold">Something went wrong.</p>
                      <p className="text-sm text-red-700 mt-0.5">Please try again or email us directly at sales@growmoreparking.com</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Gopal Mansion CHS., Office No. 67-B,<br />
                        Ground Floor, Gurunanak Road,<br />
                        Bandra (W), Mumbai - 400 050
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919321855377" className="hover:text-primary-600 transition">
                          +91 93218 55377
                        </a>
                        <br />
                        <a href="tel:+919321554553" className="hover:text-primary-600 transition">
                          +91 93215 54553
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:sales@growmoreparking.com" className="hover:text-primary-600 transition">
                          sales@growmoreparking.com
                        </a>
                        <br />
                        <a href="mailto:ravin@growmoreparking.com" className="hover:text-primary-600 transition">
                          ravin@growmoreparking.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      <FaWhatsapp size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href="https://wa.me/919321855377?text=Hello%20Growmore%20Parking%2C%20I%20need%20information%20about%20your%20valet%20parking%20services." 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="hover:text-green-600 transition flex items-center gap-2">
                          <span>+91 93218 55377</span>
                        </a>
                        <span className="text-sm text-green-600 font-medium">Click to chat instantly</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed<br />
                        {/* <span className="text-primary-600 font-medium">24/7 Emergency Support Available</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                {/* Call and Email Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="tel:+919321855377"
                    className="card bg-primary-50 hover:bg-primary-100 text-center border-2 border-primary-200 transition"
                  >
                    <FiPhone className="mx-auto mb-2 text-primary-600" size={32} />
                    <div className="font-bold text-gray-900">Call Now</div>
                    <div className="text-sm text-gray-600">Instant Support</div>
                  </a>
                  <a 
                    href="mailto:sales@growmoreparking.com"
                    className="card bg-primary-50 hover:bg-primary-100 text-center border-2 border-primary-200 transition"
                  >
                    <FiMail className="mx-auto mb-2 text-primary-600" size={32} />
                    <div className="font-bold text-gray-900">Email Us</div>
                    <div className="text-sm text-gray-600">Quick Response</div>
                  </a>
                </div>

                {/* WhatsApp Quick Contact - Featured */}
                <a 
                  href="https://wa.me/919321855377?text=Hello%20Growmore%20Parking%2C%20I%20need%20information%20about%20your%20valet%20parking%20services.%20Please%20help%20me." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card bg-green-50 hover:bg-green-100 text-center border-2 border-green-500 transition transform hover:scale-105 block"
                >
                  <FaWhatsapp className="mx-auto mb-2 text-green-600" size={40} />
                  <div className="font-bold text-gray-900 text-lg">Chat on WhatsApp</div>
                  <div className="text-sm text-green-600 font-medium">Get instant replies</div>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="card bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMapPin size={48} className="mx-auto mb-2" />
                  <p>Map Location</p>
                  <p className="text-sm">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'What areas do you serve?',
                answer: 'We provide parking solutions across major cities in India including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, and Pune. We are continuously expanding to new locations.'
              },
              {
                question: 'How quickly can you deploy a parking solution?',
                answer: 'Depending on the scope and complexity, we can typically deploy valet services within 7 days and automated systems within 2-4 weeks after site assessment.'
              },
              {
                question: 'Do you provide emergency support?',
                answer: 'Yes, we offer 24/7 emergency support for all our clients to ensure uninterrupted parking operations.'
              },
              {
                question: 'Can your systems integrate with our existing infrastructure?',
                answer: 'Absolutely! Our solutions are designed to be flexible and can integrate with most existing parking infrastructure and building management systems.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
