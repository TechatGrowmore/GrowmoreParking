'use client'

import Image from 'next/image'

const clients = [
  { name: 'Muso',          logo: '/clients/MuSo-Logo1_75_230x.png'  },
  { name: 'Crompton',      logo: '/clients/crompton_logo.webp'       },
  { name: 'Bonito',        logo: '/clients/Bonito_Logo.svg'          },
  { name: 'JSW',           logo: '/clients/JSW_Group_Logo.png'       },
  { name: 'Lotus Banquet', logo: '/clients/lotus-banquet.png'        },
  { name: 'Mercedes-Benz', logo: '/clients/Mercedes_logo.png'        },
  { name: 'PMG Events',    logo: '/clients/pmg_eventslogo.png'       },
]

// Duplicate the list so the marquee loops seamlessly
const doubled = [...clients, ...clients]

export default function ClientsSlider() {
  return (
    <section className="clients-section section-padding">
      {/* Decorative top border accent */}
      <div className="clients-accent-bar" />

      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="clients-eyebrow">Trusted By Industry Leaders</span>
          <h2 className="heading-2 mt-3 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Proudly partnering with leading corporates, hospitality brands, and industry giants
            to deliver world-class valet parking experiences.
          </p>
          {/* Green underline accent */}
          <div className="clients-underline" />
        </div>
      </div>

      {/* Slider track — full-width, no container clipping */}
      <div className="clients-slider-wrapper">
        {/* Fade edges */}
        <div className="clients-fade-left" aria-hidden="true" />
        <div className="clients-fade-right" aria-hidden="true" />

        <div className="clients-track" aria-label="Our clients">
          {doubled.map((client, i) => (
            <div key={i} className="clients-card" aria-label={client.name}>
              <div className="clients-logo-wrap">
                <Image
                  src={client.logo}
                  alt={`${client.name} – Growmore Parking Client`}
                  width={160}
                  height={80}
                  className="clients-logo-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Scoped styles */}
      <style jsx>{`
        /* ── Section ── */
        .clients-section {
          background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 60%, #f0fdf4 100%);
          position: relative;
          overflow: hidden;
        }

        /* Top accent bar */
        .clients-accent-bar {
          height: 4px;
          background: linear-gradient(90deg, transparent, #16a34a 30%, #4ade80 70%, transparent);
          margin-bottom: 0;
        }

        /* Eyebrow label */
        .clients-eyebrow {
          display: inline-block;
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          color: #15803d;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 1.1rem;
          border-radius: 9999px;
          border: 1px solid #86efac;
        }

        /* Green animated underline */
        .clients-underline {
          width: 72px;
          height: 4px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          border-radius: 2px;
          margin: 1.2rem auto 0;
          animation: pulse-bar 2.5s ease-in-out infinite;
        }

        @keyframes pulse-bar {
          0%, 100% { opacity: 1;   width: 72px;  }
          50%       { opacity: 0.6; width: 100px; }
        }

        /* ── Slider wrapper ── */
        .clients-slider-wrapper {
          position: relative;
          overflow: hidden;
          padding: 1.5rem 0 2.5rem;
        }

        /* Gradient fade masks */
        .clients-fade-left,
        .clients-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 140px;
          z-index: 10;
          pointer-events: none;
        }
        .clients-fade-left  { left: 0;  background: linear-gradient(90deg,  #f0fdf4 0%, transparent 100%); }
        .clients-fade-right { right: 0; background: linear-gradient(270deg, #f0fdf4 0%, transparent 100%); }

        /* Scrolling track */
        .clients-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marquee 18s linear infinite;
        }

        /* Pause on hover */
        .clients-slider-wrapper:hover .clients-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Client card ── */
        .clients-card {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(134, 239, 172, 0.4);
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(22, 163, 74, 0.07), 0 1px 4px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
          min-width: 200px;
        }

        .clients-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 12px 32px rgba(22, 163, 74, 0.18), 0 2px 8px rgba(0,0,0,0.08);
          border-color: rgba(74, 222, 128, 0.7);
        }

        /* Logo container */
        .clients-logo-wrap {
          width: 160px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .clients-logo-img {
          object-fit: contain;
          filter: grayscale(20%) brightness(0.95);
          transition: filter 0.3s ease;
        }

        .clients-card:hover .clients-logo-img {
          filter: grayscale(0%) brightness(1);
        }



        /* ── Responsive ── */
        @media (max-width: 640px) {
          .clients-fade-left,
          .clients-fade-right { width: 60px; }
        }
      `}</style>
    </section>
  )
}
