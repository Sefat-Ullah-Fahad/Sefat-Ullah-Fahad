import { Gelasio, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import FixedBackgroundGrid from '../components/FixedBackgroundGrid';

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

export const metadata = {
  title: 'Md Sefat Ullah Fahad | Full Stack Developer',
  description: 'Full Stack Developer building fast, scalable and user-friendly web applications with Next.js, React, Node.js, and modern creative animations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${gelasio.variable} ${jetbrainsMono.variable} bg-[#07090e] text-[#e2e8f0] font-sans antialiased selection:bg-purple-500/30 selection:text-pink-300 min-h-screen overflow-x-hidden`}>
        <FixedBackgroundGrid />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}