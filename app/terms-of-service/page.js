export const metadata = {
  title: 'Terms of Service | Growmore Parking Solutions',
  description: 'Terms of service for Growmore Parking Solutions Pvt Limited',
  alternates: {
    canonical: 'https://www.growmoreparking.com/terms-of-service',
  },
  robots: { index: false, follow: false },
}

export default function TermsOfService() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 text-white text-center">Terms of Service</h1>
          <p className="text-center text-primary-100 mt-4">Last updated: February 17, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              Welcome to Growmore Parking Solutions Pvt Limited. By accessing our website or using our services, 
              you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services</h2>
            <p>
              Growmore Parking Solutions provides valet parking, parking management, and automated parking system 
              services. The specific terms of service delivery will be outlined in individual service agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when using our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse or abuse our services or facilities</li>
              <li>Maintain the security of your account credentials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>
              While we take all reasonable precautions to ensure the safety and security of vehicles under our care, 
              our liability is limited as specified in individual service agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
              posting to our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at sales@growmoreparking.com or 
              ravin@growmoreparking.com, or call +91 93218 55377 / +91 93215 54553.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
