import Link from 'next/link'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_DEMO_MSG = "https://wa.me/919321855377?text=Hi%20Growmore%20Parking%2C%20I%20am%20interested%20in%20a%20demo%20of%20your%20Smart%20Valet%20App.%20Please%20schedule%20a%20demo%20for%20me."

export const metadata = {
  title: 'Smart Valet App | Digital Valet Parking Software | Growmore Parking',
  description: 'Smart Valet App by Growmore Parking — paperless QR ticketing, advance car requests, real-time driver tracking and live dashboard. Request a free demo today.',
  keywords: 'smart valet app, valet parking software, paperless valet ticketing, QR valet parking, digital valet parking, valet management software India',
  alternates: {
    canonical: 'https://growmoreparking.com/smart-valet',
  },
}

export default function SmartValetPage() {
  const features = [
    {
      icon: '📲',
      title: 'Paperless QR Ticketing',
      description: 'Replace paper tokens with reusable QR-code tickets. Save up to 700% on ticket printing costs and help the environment.',
    },
    {
      icon: '🔔',
      title: 'Guest Car Request in Advance',
      description: 'Guests simply notify the valet desk in advance via the app. A driver is assigned instantly so guests never have to wait.',
    },
    {
      icon: '⏱️',
      title: 'Real-Time Updates',
      description: 'Live dashboard and detailed reports help you make the right decisions at the right time with real information.',
    },
    {
      icon: '👆',
      title: 'Minimalistic System',
      description: 'Smart Valet minimises manual input, so your staff makes zero mistakes and guests enjoy a seamless experience.',
    },
    {
      icon: '🚗',
      title: 'No More Rush at Valet Desk',
      description: 'By allowing guests to request cars in advance, we ensure no queues — even during peak hours.',
    },
    {
      icon: '📊',
      title: 'Improve Driver Productivity',
      description: 'Assign, track, and manage drivers efficiently. Know which driver has which car at all times.',
    },
  ]

  const steps = [
    {
      step: '01',
      title: 'Guest Arrives',
      desc: 'Guest hands over keys. Valet scans / generates a QR-code ticket instantly — no paper required.',
    },
    {
      step: '02',
      title: 'Request Car in Advance',
      desc: 'Guest notifies the valet desk from their phone. The system assigns the nearest available driver.',
    },
    {
      step: '03',
      title: 'Driver Gets Car',
      desc: 'Driver receives a notification, retrieves the vehicle, and updates status — all in real time.',
    },
    {
      step: '04',
      title: 'Guest Drives Away',
      desc: 'Car is ready before guest reaches the valet desk. Zero wait. Delighted guests every time.',
    },
  ]


  return (

    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-600 bg-opacity-30 border border-primary-500 border-opacity-40 px-4 py-2 rounded-full text-sm font-semibold text-primary-200">
                ⚡ Smart Valet App — New Product
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Smart Valet Parking <span className="text-primary-400">Software</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Optimize your valet parking operations & allow your customers to request their car in advance — so they never have to wait at the valet desk.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {['Save money on tickets', 'Improve Valet Operations', 'Increase Driver Productivity', 'Remove waiting time'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-200 text-sm">
                    <span className="text-primary-400">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={WHATSAPP_DEMO_MSG}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-demo-btn"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 text-base"
                >
                  🟢 Schedule a Demo →
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 text-base">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mock App UI card */}
            <div className="relative">
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-xl mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">SV</div>
                      <span className="font-bold text-gray-900 text-sm">Smart Valet</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Live</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Request received', done: true },
                      { label: 'Car is on its way', done: true },
                      { label: 'Arrived', done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={"w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 " + (item.done ? 'bg-primary-600 border-primary-600 text-white' : 'border-gray-300')}>
                          {item.done && <span style={{fontSize:'10px'}}>✓</span>}
                        </div>
                        <span className={"text-sm " + (item.done ? 'text-gray-800 font-medium' : 'text-gray-400')}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-900 rounded-lg mb-2 flex items-center justify-center text-white text-2xl">▦</div>
                    <span className="text-xs text-gray-500 font-medium">QR Ticket</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center justify-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-2 text-xl">🔔</div>
                    <span className="text-xs text-gray-500 font-medium text-center">Car Alert</span>
                  </div>
                </div>
                <a href={WHATSAPP_DEMO_MSG} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3 rounded-xl text-sm hover:bg-gray-800 transition-colors">
                  Get My Car 🚗
                </a>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl rotate-3">
                🌿 Paperless & Reusable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why clients love us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="heading-2 mb-4">Why Our Clients Love Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results for real businesses — from cost savings to happier guests</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '♻️', title: 'They save money on tickets', desc: "Our eco-friendly paperless valet solution saves money on ticket printing. It's reusable — save more than 700%!", highlight: 'Save 700%+', color: 'orange' },
              { icon: '⏱️', title: 'No more waiting for guests', desc: 'Guests request their car in advance and it is ready when they arrive at the valet desk. No queue. No frustration.', highlight: 'Zero Wait', color: 'green' },
              { icon: '📊', title: 'Better operational visibility', desc: 'Real-time dashboard and reports give you full visibility — vehicles, drivers, status, and revenue — all in one place.', highlight: 'Full Visibility', color: 'blue' },
            ].map((item, i) => (
              <div key={i} className="card text-center flex flex-col items-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className={"text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full " + (item.color === 'orange' ? 'bg-orange-100 text-orange-600' : item.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-primary-100 text-primary-600')}>
                  {item.highlight}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Reasons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="heading-2 mb-4">More Reasons to Love Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Smart Valet is packed with features to streamline every step of your valet operations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="card flex flex-col items-start gap-4">
                <div className="text-4xl">{f.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="heading-2 mb-4">How Smart Valet Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Four simple steps to a completely seamless valet experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-black mb-5 shadow-xl ring-4 ring-primary-100">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest car request feature highlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary-200">Key Feature</div>
              <h2 className="heading-2">Guest Can Request Their Car in Advance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Guest can simply notify the valet desk manager in advance. The valet desk manager then assigns a driver to bring the car so the guest does not have to wait.
              </p>
              <div className="space-y-3">
                {['Guest sends car request from their phone or via app', 'Valet manager is notified instantly', 'Nearest available driver is assigned', 'Guest gets real-time status updates', 'Car ready before guest reaches the desk'].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_DEMO_MSG} target="_blank" rel="noopener noreferrer" id="feature-demo-btn" className="inline-flex items-center gap-2 btn-primary">
                🟢 Request a Demo →
              </a>
            </div>
            {/* Mock UI */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">SV</div>
                    <span className="font-bold text-gray-900">Smart Valet</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Live Tracking</span>
                </div>
                <div className="space-y-3 mb-6">
                  {[{label:'Request received',done:true,time:'6:14 PM'},{label:'Car is on its way',done:true,time:'6:16 PM'},{label:'Arrived',done:false,time:'ETA 2 min'}].map((item,i)=>(
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={"w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 " + (item.done ? 'bg-primary-600 border-primary-600 text-white' : 'border-gray-300')}>
                          {item.done && <span style={{fontSize:'10px'}}>✓</span>}
                        </div>
                        <span className={"text-sm font-medium " + (item.done ? 'text-gray-800' : 'text-gray-400')}>{item.label}</span>
                      </div>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_DEMO_MSG} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-gray-800 transition-colors">
                  Get My Car 🚗
                </a>
              </div>
              <div className="absolute -bottom-6 -left-4 bg-yellow-400 text-yellow-900 px-4 py-3 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2">
                🔔 Your car is ready!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No rush section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative bg-gradient-to-br from-primary-50 to-gray-100 rounded-3xl p-10 flex flex-col items-center gap-6 lg:order-1">
              <div className="text-7xl">😌</div>
              <div className="grid grid-cols-3 gap-4 w-full">
                {['🚗','🚙','🚕'].map((car,i)=>(
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-center text-3xl shadow-lg">{car}</div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-4 w-full text-center shadow-lg">
                <div className="text-primary-600 font-bold text-lg mb-1">Zero Queue</div>
                <div className="text-gray-500 text-sm">All cars retrieved on time</div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-green-200">Peak Hour Management</div>
              <h2 className="heading-2">No More Rush at Valet Desk</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By allowing guests to request their cars in advance, we ensure that there are no queues and the valet team can operate smoothly even during peak hours.
              </p>
              <div className="space-y-3">
                {['Stagger car retrievals automatically','Assign drivers before guests leave the table','Managers get a live queue view','No bottlenecks even at event end times'].map((point,i)=>(
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gray-900 text-white py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{num:'700%+',label:'Ticket cost savings'},{num:'0 min',label:'Guest wait time'},{num:'100%',label:'Digital & paperless'},{num:'24/7',label:'Real-time monitoring'}].map((stat,i)=>(
              <div key={i}>
                <div className="text-4xl font-black text-primary-400 mb-1">{stat.num}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Upgrade Your Valet Experience?</h2>
            <p className="text-xl text-gray-300">Request a free demo of the Smart Valet App and see how it transforms your operations in minutes.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href={WHATSAPP_DEMO_MSG} target="_blank" rel="noopener noreferrer" id="cta-demo-btn" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-2xl transform hover:-translate-y-1 text-lg">
                🟢 Schedule a Demo on WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg">
                Contact Us →
              </Link>
            </div>
            <p className="text-gray-400 text-sm pt-2">💬 We typically respond within a few minutes on WhatsApp</p>
          </div>
        </div>
      </section>
    </>
  )
}
