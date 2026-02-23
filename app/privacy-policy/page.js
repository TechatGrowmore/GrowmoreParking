import { FiPhone, FiMail } from 'react-icons/fi'

export const metadata = {
  title: 'Privacy Policy | Growmore Parking Solutions',
  description: 'Privacy policy for Growmore Parking Solutions Pvt Limited',
  alternates: {
    canonical: 'https://www.growmoreparking.com/privacy-policy',
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 text-white text-center">Privacy Policy</h1>
          <p className="text-center text-primary-100 mt-4">Last updated: February 17, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              Growmore Parking Solutions Pvt Limited ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Data: Name, email address, phone number, and company information</li>
              <li>Vehicle Information: License plate numbers, vehicle make and model (for parking services)</li>
              <li>Usage Data: Information about how you use our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our parking services</li>
              <li>Process your requests and transactions</li>
              <li>Send you updates and communications</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Security</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="flex items-center gap-2 mb-2">
                <FiMail className="text-primary-600" />
                Sales: sales@growmoreparking.com
              </p>
              <p className="flex items-center gap-2 mb-2">
                <FiMail className="text-primary-600" />
                Email: ravin@growmoreparking.com
              </p>
              <p className="flex items-center gap-2">
                <FiPhone className="text-primary-600" />
                Phone: +91 93218 55377
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
