import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://www.growmoreparking.com'),
  title: {
    default: 'Growmore Parking Solutions Pvt Limited | Professional Valet Parking Services',
    template: '%s | Growmore Parking Solutions'
  },
  description: 'Leading valet parking services provider offering professional parking attendants, trained valet staff, and exceptional parking management for corporates, malls, events, and hospitality industry.',
  keywords: 'valet parking, valet services, parking attendants, professional valet, corporate valet parking, event valet services, mall valet parking, hotel valet parking, valet parking management',
  authors: [{ name: 'Growmore Parking Solutions' }],
  creator: 'Growmore Parking Solutions Pvt Limited',
  publisher: 'Growmore Parking Solutions Pvt Limited',
  icons: {
    icon: '/logo/logo2.webp',
    shortcut: '/logo/logo2.webp',
    apple: '/logo/logo2.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.growmoreparking.com',
    title: 'Growmore Parking Solutions Pvt Limited',
    description: 'Professional valet parking services with trained attendants',
    siteName: 'Growmore Parking Solutions',
    images: [
      {
        url: '/logo/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Growmore Parking Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growmore Parking Solutions Pvt Limited',
    description: 'Professional valet parking services with trained attendants',
    images: ['/logo/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://www.growmoreparking.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
