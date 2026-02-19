'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling down a bit
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const whatsappNumber = '919321855377'
  const whatsappMessage = encodeURIComponent('Hello Growmore Parking! I would like to inquire about your valet parking services. Please assist me.')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        1
      </span>
    </a>
  )
}

export default WhatsAppFloat
