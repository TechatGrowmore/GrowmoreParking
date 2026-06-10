import Image from 'next/image'
import Link from 'next/link'
import {
  FiCheckCircle, FiShield, FiZap, FiSettings, FiWifi,
  FiClock, FiArrowRight, FiPhone
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata = {
  title: 'Boom Barriers – Automatic Gate Systems | Growmore Parking',
  description:
    'Growmore Parking supplies and installs premium automatic boom barrier systems for residential societies, corporate offices, malls, hospitals & toll plazas across Mumbai, Pune & Maharashtra. RFID, ANPR, QR-code compatible.',
  keywords:
    'boom barrier Mumbai, automatic boom barrier, RFID boom gate, ANPR boom barrier, parking boom barrier, boom barrier installation Maharashtra, access control barrier, vehicle entry gate, Growmore Parking boom barrier',
  alternates: {
    canonical: 'https://growmoreparking.com/boom-barriers',
  },
}

const features = [
  {
    icon: <FiZap size={28} />,
    title: 'Fast Operation',
    desc: 'Arm opens in as little as 1.5 seconds, keeping traffic moving at peak hours without bottlenecks.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Vehicle Safety Sensors',
    desc: 'Built-in IR/loop sensors prevent the arm from closing on any vehicle or pedestrian underneath.',
  },
  {
    icon: <FiWifi size={28} />,
    title: 'Smart Access Control',
    desc: 'Integrates with RFID, ANPR cameras, QR codes, FASTag, mobile apps & biometric systems.',
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Durable Build',
    desc: 'IP54-rated aluminium/steel housing built to withstand harsh weather, dust, and high-traffic abuse.',
  },
  {
    icon: <FiClock size={28} />,
    title: '24/7 Reliability',
    desc: 'Designed for continuous duty cycle operations — ideal for malls, hospitals, and toll plazas.',
  },
  {
    icon: <FiCheckCircle size={28} />,
    title: 'System Integration',
    desc: 'Compatible with parking software, CCTV, digital logs and real-time vehicle tracking dashboards.',
  },
]

const specs = [
  { label: 'Boom Arm Length',    value: '3 m – 8 m (customisable)' },
  { label: 'Opening Speed',      value: '1.5 s – 6 s' },
  { label: 'Motor Type',         value: 'DC Brushless / Electromechanical' },
  { label: 'Power Supply',       value: '220V AC or DC 24V' },
  { label: 'Protection Grade',   value: 'IP54 / IP55' },
  { label: 'Operating Temp.',    value: '-20 °C to +70 °C' },
  { label: 'Duty Cycle',         value: 'Up to 100% (continuous)' },
  { label: 'Arm Types',          value: 'Straight · Folding · Telescopic' },
  { label: 'Integration',        value: 'RFID, ANPR, QR, FASTag, Biometric' },
  { label: 'Warranty',           value: '1 Year On-site Support' },
]

const applications = [
  { emoji: '🏢', title: 'Corporate & IT Parks',         desc: 'Streamlined employee and visitor entry with RFID or app-based authentication.' },
  { emoji: '🏘️', title: 'Residential Societies',        desc: 'Secure gated access for residents with visitor management integration.' },
  { emoji: '🏬', title: 'Malls & Commercial Complexes', desc: 'High-volume throughput with FASTag & QR-code payment on exit.' },
  { emoji: '🏥', title: 'Hospitals & Hotels',           desc: 'VIP lanes, ambulance priority bypass, and guest valet integration.' },
  { emoji: '🏭', title: 'Industrial Facilities',        desc: 'Heavy-duty barriers for freight and logistics zone access control.' },
  { emoji: '🛣️', title: 'Toll Plazas',                  desc: 'High-speed FASTag-compatible systems for arterial road toll management.' },
]

export default function BoomBarriersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden py-20 md:py-28">
        {/* Decorative blobs */}
        <div style={{
          position:'absolute', top:'-80px', right:'-80px',
          width:'400px', height:'400px', borderRadius:'50%',
          background:'rgba(22,163,74,0.08)', filter:'blur(60px)', zIndex:0
        }} />
        <div style={{
          position:'absolute', bottom:'-60px', left:'-60px',
          width:'300px', height:'300px', borderRadius:'50%',
          background:'rgba(74,222,128,0.1)', filter:'blur(50px)', zIndex:0
        }} />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 fade-in-up">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200">
                Product — Boom Barriers
              </span>
              <h1 className="heading-1">
                Automatic <span className="text-primary-600">Boom Barrier</span> Systems
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Growmore Parking delivers and installs enterprise-grade boom barrier
                solutions across Mumbai, Pune &amp; Maharashtra — engineered for speed,
                security &amp; seamless integration with modern access control technologies.
              </p>
              <ul className="space-y-2 pt-2">
                {['RFID · ANPR · FASTag · QR Code compatible','Safety sensors standard on all units','1-Year on-site warranty &amp; AMC available','Same-week installation across Mumbai &amp; Pune'].map((pt,i)=>(
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <FiCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" size={18}/>
                    <span dangerouslySetInnerHTML={{__html:pt}} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a Free Quote <FiArrowRight />
                </Link>
                <a
                  href="https://wa.me/919321855377?text=Hi%20Growmore%20Parking!%20I%27m%20interested%20in%20your%20Boom%20Barrier%20systems.%20Please%20share%20details."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp size={20}/> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative h-[420px] lg:h-[520px]">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-2 opacity-40" />
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/boom-barrier/hero.png"
                  alt="Growmore Parking automatic boom barrier system at corporate parking entrance"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-sm font-bold text-gray-900">⚡ 1.5s Open Speed</div>
                  <div className="text-xs text-gray-500">IP54 Weatherproof Build</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200 mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-2 mb-4">Built for Performance &amp; Reliability</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Every Growmore Parking boom barrier is sourced from certified manufacturers and installed
              by trained engineers — ensuring zero-compromise security at your facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group card border border-gray-100 hover:border-primary-200 hover:shadow-2xl">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative h-72 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/boom-barrier/installation.png"
                  alt="Growmore Parking boom barrier installed at gated community entrance"
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-primary-600 px-3 py-1 rounded-full">
                  Dual-Lane Entry/Exit Setup
                </span>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/boom-barrier/product.png"
                  alt="Boom barrier control unit close-up"
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/boom-barrier/anpr.png"
                  alt="ANPR camera with boom barrier for automatic number plate recognition"
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-lg">
                  ANPR Integration
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200">
                Smart Technology
              </span>
              <h2 className="heading-2">End-to-End Access Control Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our boom barriers are more than just gates — they're the first layer of your
                facility's intelligent parking ecosystem. Choose from straight, folding, or
                telescopic boom arms and pair with any authentication technology.
              </p>
              <div className="space-y-3">
                {[
                  'RFID Card & Tag Reader compatible',
                  'ANPR — Automatic Number Plate Recognition',
                  'FASTag toll-grade integration available',
                  'QR Code & Mobile App entry support',
                  'Biometric system integration',
                  'Real-time entry/exit digital logs',
                  'CCTV & parking software compatible',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary-100 rounded-full p-1.5">
                      <FiCheckCircle className="text-primary-600" size={16} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200 mb-4">
              Technical Specifications
            </span>
            <h2 className="heading-2 mb-4">Detailed Product Specifications</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Specifications vary by model and site requirements. Our engineers will assess your
              facility and recommend the optimal configuration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-8 py-5 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${i !== specs.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="w-3 h-3 rounded-full bg-primary-500 flex-shrink-0" />
                  <span className="w-52 font-semibold text-gray-800 flex-shrink-0">{s.label}</span>
                  <span className="text-gray-600">{s.value}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              * All specifications subject to site assessment. Custom configurations available on request.
            </p>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30 mb-4">
              Applications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Where We Install Boom Barriers</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              From gated societies to industrial freight zones — our barriers perform in every environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{app.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARM TYPES ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200 mb-4">
              Boom Arm Types
            </span>
            <h2 className="heading-2 mb-4">Choose the Right Arm for Your Site</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Straight Boom Arm',
                icon: '━',
                desc: 'Standard configuration for open-air parking entrances and driveways. Available in 3m–8m lengths.',
                best: 'Surface parking, toll booths, open sites',
              },
              {
                type: 'Folding Boom Arm',
                icon: '⌐',
                desc: 'Arm folds upward — perfect for basement or underground parking with limited vertical clearance.',
                best: 'Underground parking, low-ceiling garages',
              },
              {
                type: 'Telescopic Boom Arm',
                icon: '↔',
                desc: 'Adjustable length arm that extends to span wider lanes without a fixed length commitment.',
                best: 'Wide lanes, custom site requirements',
              },
            ].map((arm, i) => (
              <div key={i} className="card border-2 border-primary-100 hover:border-primary-400 text-center">
                <div className="text-5xl font-mono text-primary-500 mb-4">{arm.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{arm.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{arm.desc}</p>
                <div className="bg-primary-50 rounded-lg px-4 py-2 text-xs font-semibold text-primary-700 border border-primary-200">
                  Best for: {arm.best}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Secure Your Facility?
            </h2>
            <p className="text-xl text-primary-100">
              Get a free site assessment and customised boom barrier quote from our team.
              Installation across Mumbai, Navi Mumbai, Thane &amp; Pune within days.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Request Free Quote <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/919321855377?text=Hi!%20I%20need%20a%20Boom%20Barrier%20for%20my%20facility.%20Please%20send%20details%20and%20pricing."
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FaWhatsapp size={20} /> WhatsApp Now
              </a>
              <Link
                href="tel:+919321855377"
                className="bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FiPhone size={18} /> Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
