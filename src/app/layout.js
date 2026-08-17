import { Gelasio, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import FixedBackgroundGrid from '../components/FixedBackgroundGrid';
import ClientLayout from '../components/ClientLayout';
import Header from '@/components/sheard/Navbar';
import Footer from '@/components/sheard/Footer';

const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

// Your actual Firebase Hosting URL
const siteUrl = 'https://sefat-ullah-fahad.web.app';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Sefat Ullah Fahad | Full Stack Developer',
    template: '%s | Sefat Ullah Fahad',
  },

  description:
    "Hi, I'm Sefatullah Fahad, a passionate Full-Stack Web Developer. I build fast, scalable, and user-friendly web applications using Next.js, React, Node.js and modern animation tools like GSAP & Framer Motion.",

  keywords: [
    'Sefat Ullah Fahad',
    'Md Sefat Ullah Fahad',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Web Developer Bangladesh',
    'Web Developer Rajshahi',
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
  ],

  authors: [
    {
      name: 'Sefat Ullah Fahad',
      url: siteUrl,
    },
  ],

  creator: 'Sefat Ullah Fahad',
  publisher: 'Sefat Ullah Fahad',

  // ==========================================
  // Google Search Console Verification
  // ==========================================
  verification: {
    google: 'x600XH1dDq7PeweseUznfpexDsfaMqiI_JkszWL88N8',
  },

  // ==========================================
  // Open Graph
  // ==========================================
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sefat Ullah Fahad',

    title: 'Sefat Ullah Fahad | Full Stack Developer',

    description:
      'Full-Stack Web Developer building fast, scalable, and user-friendly web applications with Next.js, React, Node.js and modern creative animations.',

    images: [
      {
        url: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1786959761/sefat-ullah-fahad_fdxwuu.jpg',
        width: 1200,
        height: 630,
        alt: 'Sefat Ullah Fahad - Full Stack Developer',
      },
    ],
  },

  // ==========================================
  // Twitter / X
  // ==========================================
  twitter: {
    card: 'summary_large_image',

    title: 'Sefat Ullah Fahad | Full Stack Developer',

    description:
      'Full-Stack Web Developer building fast, scalable, and user-friendly web applications.',

    images: [
      'https://res.cloudinary.com/dsga4gyw9/image/upload/v1786959761/sefat-ullah-fahad_fdxwuu.jpg',
    ],
  },

  // ==========================================
  // Robots / SEO
  // ==========================================
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

  // ==========================================
  // Canonical URL
  // ==========================================
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${gelasio.variable} ${jetbrainsMono.variable} bg-[#07090e] text-[#e2e8f0] font-sans antialiased selection:bg-purple-500/30 selection:text-pink-300 min-h-screen overflow-x-hidden`}
      >
        <Header />

        <FixedBackgroundGrid />

        <ClientLayout>
          {children}
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}