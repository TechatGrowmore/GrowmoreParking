import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo/logo2.jpeg" 
                alt="Growmore Parking Solutions" 
                width={60} 
                height={60}
                className="object-contain rounded-lg"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Growmore Parking</h3>
                <p className="text-xs text-gray-400">Solutions Pvt Limited</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Leading provider of professional valet parking and smart parking management solutions, 
              transforming parking experiences across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition">Our Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/services#valet" className="hover:text-primary-400 transition">Valet Parking</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition">Corporate Valet</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition">Event Valet Services</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition">Mall & Retail Parking</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition">Hospitality Valet</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Business District, <br />
                  New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={20} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary-400 transition text-sm">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={20} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@growmoreparking.com" className="hover:text-primary-400 transition text-sm">
                  info@growmoreparking.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/911234567890?text=Hello%20Growmore%20Parking%2C%20I%20want%20to%20know%20more%20about%20your%20valet%20parking%20services." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition mt-2 text-sm font-medium">
                  <FaWhatsapp size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {currentYear} Growmore Parking Solutions Pvt Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
