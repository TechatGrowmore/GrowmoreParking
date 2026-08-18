import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from 'react-icons/fi'

export const metadata = {
  title: 'Terms of Service | Growmore Parking Solutions',
  description: 'Terms of Service for Growmore Parking Solutions Pvt Limited — governing the use of our valet parking, boom barrier installation, Smart Valet App, and parking management services.',
  alternates: {
    canonical: 'https://growmoreparking.com/terms-of-service',
  },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    content: (
      <p>
        These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;you&quot;) and Growmore Parking Solutions Pvt Limited (&quot;Growmore&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), a company incorporated in India, with its registered office at Gopal Mansion CHS., Office No.67-B, Ground Floor, Gurunanak Road, Bandra (W), Mumbai – 400050.
        <br /><br />
        By engaging our services — whether through our website, direct agreement, or any other means — you confirm that you have read, understood, and agreed to be bound by these Terms. If you are entering into this agreement on behalf of an organisation, you represent that you have the authority to bind that organisation.
        <br /><br />
        These Terms apply to all services offered by Growmore, including Valet Parking Services, Boom Barrier Systems, the Smart Valet App, Smart Parking Dashboard, and any related consulting or maintenance services.
      </p>
    ),
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: (
      <>
        <p>Growmore Parking Solutions provides the following categories of services:</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.1 Professional Valet Parking Services</h3>
        <p>Managed valet parking services for corporate offices, IT parks, shopping malls, hotels, hospitals, residential complexes, and events. Services include deployment of trained and uniformed valet attendants, vehicle check-in/check-out operations, key management, digital ticketing, and supervisory oversight.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.2 Smart Valet App</h3>
        <p>A digital valet management software solution enabling paperless QR-code ticketing, advance car retrieval requests by guests, real-time driver assignment and tracking, and live operational dashboards for facility managers. Licensing, setup, and support terms are specified in individual Software Service Agreements.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.3 Automatic Boom Barrier Systems</h3>
        <p>Supply, installation, configuration, and maintenance of automatic boom barrier systems with RFID, ANPR (Automatic Number Plate Recognition), FASTag, and QR-code integration for access control at parking facilities, residential societies, corporate campuses, malls, and toll plazas.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.4 Smart Parking Dashboard</h3>
        <p>A real-time web-based monitoring platform providing live occupancy feeds, vehicle entry/exit logs, boom barrier status, revenue analytics, ANPR camera integration, and multi-site management capabilities.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.5 Additional Services</h3>
        <p>Parking lot line marking, slot numbering, signage, stack parking operations, and customised parking management consulting, as agreed in writing.</p>
      </>
    ),
  },
  {
    id: 'service-agreement',
    title: '3. Service Agreements & Quotations',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>All service engagements are governed by a written Service Agreement or Purchase Order, which will specify the exact scope, duration, pricing, staffing levels, and specific terms applicable to your facility.</li>
          <li>Quotations provided via our website, email, or WhatsApp are indicative and non-binding until formalised in a signed agreement.</li>
          <li>We reserve the right to decline any service request without obligation to provide a reason.</li>
          <li>Changes to agreed scope must be requested in writing and approved by Growmore before implementation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'client-obligations',
    title: '4. Client Responsibilities',
    content: (
      <>
        <p>As our client or end user, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li>Provide accurate and complete information about your facility, requirements, and authorised contacts at the time of engagement.</li>
          <li>Ensure a safe, accessible, and adequate working environment for Growmore staff at all times.</li>
          <li>Designate a point of contact (facility manager / operations head) responsible for day-to-day coordination with our team.</li>
          <li>Immediately report any vehicle damage, theft, disputes, or incidents to our on-site supervisor and Growmore management.</li>
          <li>Not direct our staff to perform tasks outside the agreed scope of services, including driving vehicles beyond the designated parking area, errand running, or any personal tasks.</li>
          <li>Ensure that guests and visitors using valet services provide accurate vehicle details and retrieve their vehicles in a timely manner.</li>
          <li>Comply with all applicable local laws, municipal regulations, and fire safety requirements at the parking facility.</li>
          <li>Pay all invoices within the agreed payment terms. Late payments may attract interest at 1.5% per month.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'vehicle-liability',
    title: '5. Vehicle Handling & Liability',
    content: (
      <>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Our Commitment</h3>
        <p>Growmore valet attendants are trained to handle vehicles with the utmost care. We maintain comprehensive third-party liability coverage for vehicles under our custody during active valet operations.</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">5.2 Liability Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Our liability for any damage to a vehicle in our custody is limited to the amount specified in the applicable Service Agreement.</li>
          <li>We are not liable for damage resulting from pre-existing vehicle conditions, mechanical failures, or natural causes (flooding, storms, acts of God).</li>
          <li>We are not liable for loss of personal belongings left inside vehicles. Guests are advised not to leave valuables in their vehicles.</li>
          <li>Claims for vehicle damage must be raised in writing within 24 hours of the incident. Claims raised after this window may not be entertained.</li>
          <li>Damage incidents will be documented, photographed, and reviewed by our management. We will cooperate fully with any insurance claim process.</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">5.3 Boom Barrier Systems</h3>
        <p>While Growmore boom barriers are equipped with vehicle safety sensors, we are not liable for damage caused by improper use of the barrier, vehicles that override barriers, or incidents caused by failure to follow safety signage at the access point.</p>
      </>
    ),
  },
  {
    id: 'smart-valet-app',
    title: '6. Smart Valet App — Additional Terms',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The Smart Valet App is provided on a Software-as-a-Service (SaaS) basis. Access is granted on a per-facility, per-client basis as specified in the Software Service Agreement.</li>
          <li>You may not sublicense, reverse-engineer, resell, or redistribute the Smart Valet App or any of its components.</li>
          <li>QR code tickets generated by the app are valid only for the vehicle and session they were issued for. Misuse or duplication of QR codes is prohibited.</li>
          <li>Growmore retains all intellectual property rights in the Smart Valet App, its underlying software, algorithms, and databases.</li>
          <li>We reserve the right to update, modify, or discontinue features of the Smart Valet App with reasonable notice. We will endeavour to ensure updates do not disrupt active operations.</li>
          <li>System downtime or technical issues caused by third-party infrastructure (internet connectivity, cloud hosting) will not constitute a breach by Growmore, provided we take reasonable steps to restore service.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'boom-barriers-terms',
    title: '7. Boom Barrier Installation Terms',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>All boom barrier systems supplied and installed by Growmore carry a 1-year on-site warranty covering manufacturing defects and installation issues. Warranty does not cover damage due to misuse, external impact, electrical surges, or tampering.</li>
          <li>Annual Maintenance Contracts (AMC) are available post-warranty and are governed by separate AMC agreements.</li>
          <li>The client is responsible for providing an adequate, protected power supply point at the barrier installation site. Growmore is not responsible for power interruptions affecting barrier operation.</li>
          <li>Any civil work, cabling, or infrastructure modifications required for installation are the client&apos;s responsibility unless explicitly included in the quoted scope.</li>
          <li>Growmore will conduct a site survey prior to installation. Any material changes discovered during installation that affect project scope may result in revised pricing.</li>
          <li>Access control configurations (RFID, ANPR, FASTag) will be set up as per specifications provided by the client. Growmore is not responsible for unauthorised access resulting from incorrect configuration data provided by the client.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'payment',
    title: '8. Payment Terms',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Valet Parking Services:</strong> Invoiced monthly in arrears unless otherwise agreed. Payment due within 15 days of invoice date.</li>
          <li><strong>Boom Barrier Systems:</strong> Typically structured as 50% advance at order confirmation and 50% upon installation completion, unless otherwise specified in the purchase order.</li>
          <li><strong>Smart Valet App:</strong> Billed as per the subscription plan agreed in the Software Service Agreement (monthly or annual).</li>
          <li>All amounts are exclusive of GST, which will be charged at the applicable rate and shown separately on invoices.</li>
          <li>Late payment of undisputed invoices will attract interest at 1.5% per month from the due date.</li>
          <li>Growmore reserves the right to suspend services in case of non-payment beyond 30 days, after written notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'termination',
    title: '9. Termination',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Either party may terminate a service engagement by giving 30 days&apos; written notice, unless the Service Agreement specifies a different notice period.</li>
          <li>Growmore may terminate immediately, without notice, in cases of: non-payment beyond 30 days, breach of these Terms, unsafe working conditions for our staff, or illegal activity at the facility.</li>
          <li>Upon termination, all outstanding amounts become immediately due and payable.</li>
          <li>For Smart Valet App subscriptions, termination takes effect at the end of the current billing cycle. No pro-rata refund is provided for partial periods.</li>
          <li>Growmore will return all client-owned keys, documents, and access cards upon termination and will securely delete or hand over client data as required by the Service Agreement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    title: '10. Intellectual Property',
    content: (
      <p>All technology, software, systems, processes, training materials, reporting formats, and methodologies developed or used by Growmore Parking Solutions are the exclusive intellectual property of Growmore. Nothing in these Terms grants the client any ownership rights over Growmore&apos;s intellectual property. The client retains ownership of their own data (vehicle records, occupancy data, revenue reports) generated through our services.</p>
    ),
  },
  {
    id: 'confidentiality',
    title: '11. Confidentiality',
    content: (
      <p>Both parties agree to keep confidential all non-public, proprietary, or sensitive information shared during the course of the engagement — including pricing, operational data, technical configurations, and client facility details. This obligation survives the termination of the service agreement for a period of 2 years. Neither party will disclose such information to third parties without prior written consent, except as required by law.</p>
    ),
  },
  {
    id: 'disclaimer',
    title: '12. Disclaimer of Warranties',
    content: (
      <p>Except as expressly stated in a signed Service Agreement, all services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Growmore makes no warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or uninterrupted operation. We do not guarantee specific results from the use of our services or technology products.</p>
    ),
  },
  {
    id: 'liability',
    title: '13. Limitation of Liability',
    content: (
      <p>To the maximum extent permitted by applicable law, Growmore&apos;s aggregate liability to you for any claim arising out of or related to these Terms or the services shall not exceed the total fees paid by you to Growmore in the three (3) months immediately preceding the claim. In no event will Growmore be liable for indirect, incidental, consequential, special, or punitive damages — including loss of revenue, loss of data, or loss of business — even if advised of the possibility of such damages.</p>
    ),
  },
  {
    id: 'governing-law',
    title: '14. Governing Law & Dispute Resolution',
    content: (
      <>
        <p>These Terms are governed by the laws of India, without regard to conflict of law principles.</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li>Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through mutual negotiation within 30 days of written notice.</li>
          <li>If not resolved through negotiation, disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'changes',
    title: '15. Changes to These Terms',
    content: (
      <p>We may update these Terms from time to time. For ongoing service engagements, material changes will be communicated with at least 30 days&apos; notice. Continued use of our services after the effective date of changes constitutes acceptance of the updated Terms. For website users, the updated date at the top of this page will reflect the latest version.</p>
    ),
  },
]

export default function TermsOfService() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Terms of Service</h1>
          <p className="text-primary-100 text-lg">Last updated: August 19, 2026</p>
          <p className="text-primary-200 text-sm mt-2 max-w-2xl mx-auto">
            Please read these terms carefully before engaging Growmore Parking Solutions for any of our services.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16 items-start">

          {/* Sticky Table of Contents (desktop) */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Contents</h2>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-gray-600 hover:text-primary-600 transition-colors py-1 border-l-2 border-transparent hover:border-primary-400 pl-3"
                  >
                    {s.title}
                  </a>
                ))}
                <a href="#contact" className="block text-xs text-gray-600 hover:text-primary-600 transition-colors py-1 border-l-2 border-transparent hover:border-primary-400 pl-3">
                  16. Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="space-y-12">
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 text-sm text-primary-800 leading-relaxed">
              <strong>Summary:</strong> These Terms govern all services provided by Growmore Parking Solutions — valet parking, boom barriers, Smart Valet App, and Smart Dashboard. Key points: 30-day notice for termination, liability limited to 3-month fees, vehicle damage claims must be raised within 24 hours, and all disputes are subject to Mumbai courts.
            </div>

            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">{s.content}</div>
              </section>
            ))}

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">16. Contact Us</h2>
              <p className="text-gray-700 mb-6">For questions about these Terms of Service, contractual queries, or to report a service concern, please contact us:</p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3 border border-gray-100">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary-600" size={18} />
                  </div>
                  <span className="text-sm">Gopal Mansion CHS., Office No.67-B, Ground Floor, Gurunanak Road, Bandra (W), Mumbai – 400050</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-600" size={18} />
                  </div>
                  <div className="text-sm">
                    <a href="mailto:sales@growmoreparking.com" className="text-primary-600 hover:underline">sales@growmoreparking.com</a>
                    {' · '}
                    <a href="mailto:ravin@growmoreparking.com" className="text-primary-600 hover:underline">ravin@growmoreparking.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary-600" size={18} />
                  </div>
                  <div className="text-sm">
                    <a href="tel:+919321855377" className="text-primary-600 hover:underline">+91 93218 55377</a>
                    {' · '}
                    <a href="tel:+919321554553" className="text-primary-600 hover:underline">+91 93215 54553</a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Also see our{' '}
                <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
