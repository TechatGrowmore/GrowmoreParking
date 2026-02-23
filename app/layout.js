import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import OrganizationSchema from '@/components/OrganizationSchema'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://www.growmoreparking.com'),
  title: {
    default: 'Valet Parking Services in Mumbai, Navi Mumbai, Thane | Growmore Parking Solutions',
    template: '%s | Growmore Parking Solutions'
  },
  description: 'Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan & Bandra. Expert parking attendants for corporates, malls, events, hotels & residential complexes. Available 24/7.',
  keywords: 'valet parking Mumbai, valet parking Navi Mumbai, valet parking Thane, valet parking Kalyan, valet parking Bandra, valet services Mumbai, parking attendants Mumbai, professional valet parking, corporate valet parking Mumbai, event valet services Mumbai, mall valet parking, hotel valet parking, residential valet parking, valet parking management Mumbai, car parking services Mumbai, valet parking company Mumbai, best valet parking Mumbai, 24/7 valet parking, trained valet staff Mumbai, valet parking Bandra West',
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
    title: 'Valet Parking Services in Mumbai, Navi Mumbai, Thane | Growmore Parking',
    description: 'Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan & Bandra. Expert parking attendants for corporates, malls, events, hotels. Available 24/7.',
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
    title: 'Valet Parking Services in Mumbai, Navi Mumbai, Thane | Growmore Parking',
    description: 'Professional valet parking services in Mumbai, Navi Mumbai, Thane, Kalyan & Bandra. Expert parking attendants available 24/7.',
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
  // NOTE: Do NOT set a global canonical here — each page sets its own via alternates.canonical
  // GSC verified via GoDaddy DNS — no verification meta tag needed
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationSchema />
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
