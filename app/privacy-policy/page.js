import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from 'react-icons/fi'

export const metadata = {
  title: 'Privacy Policy | Growmore Parking Solutions',
  description: 'Privacy Policy of Growmore Parking Solutions Pvt Limited — learn how we collect, use, and protect your personal data when you use our valet parking, boom barrier, and Smart Valet App services.',
  alternates: {
    canonical: 'https://growmoreparking.com/privacy-policy',
  },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: (
      <>
        <p>
          Growmore Parking Solutions Pvt Limited (&quot;Growmore&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered in India, is committed to protecting the privacy of every individual who interacts with our services. This Privacy Policy explains what personal information we collect, why we collect it, how it is used, stored, shared, and protected — and what rights you have over your data.
        </p>
        <p className="mt-3">
          This policy applies to all services operated by Growmore Parking Solutions, including:
        </p>
        <ul className="list-none mt-3 space-y-1">
          {[
            'Professional Valet Parking Services (Mumbai, Pune, Navi Mumbai, Thane & beyond)',
            'Smart Valet App — digital valet management software',
            'Automatic Boom Barrier Systems (supply, installation & maintenance)',
            'Smart Parking Dashboard — real-time monitoring platform',
            'Our website: growmoreparking.com',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <FiChevronRight className="text-primary-600 mt-1 flex-shrink-0" size={14} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          By using any of our services or visiting our website, you acknowledge that you have read, understood, and consent to the practices described in this policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: (
      <>
        <p>We collect different categories of information depending on which service you use:</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.1 Personal Identification Information</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Full name, designation, and company name (for corporate clients)</li>
          <li>Email address and mobile phone number</li>
          <li>Billing address and GST number (for invoicing purposes)</li>
          <li>WhatsApp contact number (used for service communication and demo requests)</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.2 Vehicle & Parking Information</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Vehicle registration number (licence plate)</li>
          <li>Vehicle make, model, and colour</li>
          <li>Entry and exit timestamps at parking facilities</li>
          <li>QR code ticket data generated via the Smart Valet App</li>
          <li>Valet driver assignment records</li>
          <li>Parking slot or zone allocation data</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.3 Technology & Access Control Data</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>RFID card / tag identifiers used with boom barrier systems</li>
          <li>ANPR (Automatic Number Plate Recognition) camera image captures</li>
          <li>FASTag transaction identifiers (where applicable)</li>
          <li>Boom barrier access logs (open/close events, timestamps, location)</li>
          <li>Smart Dashboard login credentials and usage logs</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.4 Website & Communication Data</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>IP address, browser type, device type, and operating system</li>
          <li>Pages visited, time spent, and referring URLs</li>
          <li>Contact form submissions and enquiry details</li>
          <li>WhatsApp messages sent via our chat links (subject to WhatsApp's own privacy policy)</li>
          <li>Cookies and similar tracking technologies (see Section 7)</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2.5 Information We Do Not Collect</h3>
        <p>We do not collect or store payment card details, bank account numbers, or Aadhaar / PAN numbers unless explicitly required and specifically consented to for billing purposes. Any such data is handled through secure, compliant payment gateways only.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use the information collected for the following lawful purposes:</p>
        <div className="mt-4 space-y-3">
          {[
            { head: 'Service Delivery', body: 'To provide valet parking services, manage vehicle check-in/check-out, issue QR tickets, assign drivers, and operate boom barrier access systems at your facility.' },
            { head: 'Smart Valet App Operations', body: 'To enable guests to request their vehicles in advance, send real-time car status notifications, manage the valet driver workflow, and generate operational reports for facility managers.' },
            { head: 'Boom Barrier Management', body: 'To control and log access events at installed boom barrier systems, process RFID and ANPR-based authorisations, and provide maintenance support.' },
            { head: 'Client Communication', body: 'To respond to enquiries, send service proposals, provide operational updates, share invoices, and conduct follow-up communications via phone, email, or WhatsApp.' },
            { head: 'Service Improvement', body: 'To analyse usage patterns, identify operational inefficiencies, and improve the quality of our parking management services and technology products.' },
            { head: 'Legal & Compliance', body: 'To comply with applicable Indian laws and regulations, respond to lawful requests by law enforcement or regulatory authorities, and enforce our service agreements.' },
            { head: 'Security & Fraud Prevention', body: 'To detect, prevent, and respond to fraudulent, unauthorised, or illegal activity at our managed parking facilities.' },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary-200 pl-4">
              <span className="font-semibold text-gray-900">{item.head}:</span>{' '}
              <span className="text-gray-700">{item.body}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'data-sharing',
    title: '4. How We Share Your Information',
    content: (
      <>
        <p>We do not sell, rent, or trade your personal information. We may share your data only in the following limited circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li><strong>Service Partners:</strong> With trained valet staff, site supervisors, and facility managers who need access to perform the services you have contracted us for.</li>
          <li><strong>Technology Vendors:</strong> With software and hardware vendors who assist in operating the Smart Valet App, Smart Dashboard, or boom barrier systems — all bound by confidentiality agreements.</li>
          <li><strong>Your Organisation:</strong> Parking reports, vehicle logs, and operational data may be shared with your designated facility manager or administrator as part of our service deliverables.</li>
          <li><strong>Legal Obligations:</strong> When required by law, court order, or governmental authority — such as police investigation of a vehicle incident at a managed site.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, personal data may be transferred as part of that transaction, subject to continued privacy protection.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: (
      <>
        <p>We retain personal and operational data only as long as necessary for the purposes described in this policy or as required by applicable law:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li><strong>Valet Parking Records</strong> (vehicle logs, QR tickets, driver assignments): Retained for a minimum of 1 year for dispute resolution and audit purposes.</li>
          <li><strong>Boom Barrier Access Logs</strong> (RFID / ANPR data): Retained for up to 90 days at the facility level; longer periods may apply under client-specific contracts.</li>
          <li><strong>CCTV / ANPR Camera Images:</strong> Retained for 30 days unless required for an active investigation or legal matter.</li>
          <li><strong>Client Contact & Billing Data:</strong> Retained for the duration of the service contract plus 7 years as required under Indian accounting and tax regulations.</li>
          <li><strong>Website Enquiries:</strong> Retained for up to 2 years from date of last interaction.</li>
        </ul>
        <p className="mt-4">After the applicable retention period, data is securely deleted or anonymised.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '6. Cookies & Tracking Technologies',
    content: (
      <>
        <p>Our website (growmoreparking.com) uses cookies and similar technologies to improve your browsing experience and collect analytics data. Types of cookies used:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li><strong>Essential Cookies:</strong> Required for the website to function correctly. Cannot be disabled.</li>
          <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website. This data is aggregated and anonymised.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
        </ul>
        <p className="mt-4">You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality. We do not use cookies for targeted advertising.</p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: '7. Data Security',
    content: (
      <>
        <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, misuse, or alteration, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li>HTTPS encryption on all website communications</li>
          <li>Role-based access controls on our Smart Dashboard and Valet App platforms</li>
          <li>Secure, access-controlled storage for physical parking records and key management</li>
          <li>Staff training on data handling and confidentiality obligations</li>
          <li>Regular review of data handling practices</li>
        </ul>
        <p className="mt-4">However, no system is completely secure. In the event of a data breach that is likely to harm your interests, we will notify you promptly in accordance with applicable law.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: (
      <>
        <p>Subject to applicable law, you have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
          <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Deletion:</strong> Request deletion of your data where we have no legitimate reason to retain it.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or promotional communications at any time.</li>
          <li><strong>Right to Object:</strong> Object to processing of your data for certain purposes.</li>
        </ul>
        <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:sales@growmoreparking.com" className="text-primary-600 hover:underline">sales@growmoreparking.com</a>. We will respond within 30 days.</p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: '9. Third-Party Links',
    content: (
      <p>Our website may contain links to third-party websites (e.g., WhatsApp, Google Maps, social media platforms). We are not responsible for the privacy practices of those websites. We encourage you to review their respective privacy policies before providing any personal information.</p>
    ),
  },
  {
    id: 'children',
    title: '10. Children\'s Privacy',
    content: (
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly.</p>
    ),
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: (
      <p>We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements. The updated date will be reflected at the top of this page. We encourage you to review this policy periodically. Continued use of our services after any change constitutes your acceptance of the updated policy.</p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Privacy Policy</h1>
          <p className="text-primary-100 text-lg">Last updated: August 19, 2026</p>
          <p className="text-primary-200 text-sm mt-2 max-w-2xl mx-auto">
            Growmore Parking Solutions Pvt Limited is committed to being transparent about how we handle your data.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16 items-start">

          {/* Sticky Table of Contents (desktop) */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Contents</h2>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1 border-l-2 border-transparent hover:border-primary-400 pl-3"
                  >
                    {s.title}
                  </a>
                ))}
                <a href="#contact" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1 border-l-2 border-transparent hover:border-primary-400 pl-3">
                  12. Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="space-y-12">
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 text-sm text-primary-800 leading-relaxed">
              <strong>Summary:</strong> We collect personal, vehicle, and technology data solely to operate our parking and access control services. We do not sell your data. You can contact us to access, correct, or delete your information at any time.
            </div>

            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">{s.content}</div>
              </section>
            ))}

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">12. Contact Us</h2>
              <p className="text-gray-700 mb-6">If you have questions, requests, or concerns about this Privacy Policy or how we handle your data, please contact our Privacy Officer:</p>
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
                <Link href="/terms-of-service" className="text-primary-600 hover:underline">Terms of Service</Link>.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
