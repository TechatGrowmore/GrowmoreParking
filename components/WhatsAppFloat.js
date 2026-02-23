'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'

const PHONE = '919321855377'

const services = [
  {
    label: '🅿️ Valet Parking',
    message: 'Hello Growmore Parking! I am interested in *Valet Parking* services. Could you please share details about pricing and availability?',
  },
  {
    label: '🎉 Event Valet Parking',
    message: 'Hello Growmore Parking! I am planning an event and would like to inquire about *Event Valet Parking* services. Please share details on pricing, team size, and availability.',
  },
  {
    label: '🏢 Corporate Parking',
    message: 'Hello Growmore Parking! I need *Corporate Parking* solutions for our office/facility. Could you please provide details about your packages and pricing?',
  },
  {
    label: '🔩 Stack Parking',
    message: 'Hello Growmore Parking! I am interested in *Stack Parking* systems. Please share details about installation, capacity, and pricing.',
  },
  {
    label: '🏠 Residential Parking',
    message: 'Hello Growmore Parking! I would like to know more about *Residential Parking Management* solutions for our housing society.',
  },
  {
    label: '💬 General Enquiry',
    message: 'Hello Growmore Parking! I would like to learn more about your services. Please assist me.',
  },
]

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const openWhatsApp = (message) => {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Service options */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2 mb-1">
          <p className="text-xs font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow">
            Choose a service
          </p>
          {services.map((svc, i) => (
            <button
              key={i}
              onClick={() => openWhatsApp(svc.message)}
              className="flex items-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-green-50 hover:text-green-700 border border-gray-100 transition-all duration-200 whitespace-nowrap"
            >
              {svc.label}
            </button>
          ))}
        </div>
      )}

      {/* Main WhatsApp button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Chat on WhatsApp"
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
      >
        {isOpen ? <FiX size={30} /> : <FaWhatsapp size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        )}
      </button>
    </div>
  )
}

export default WhatsAppFloat
