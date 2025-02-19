import './globals.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Metadata } from 'next'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dongobbi.github.io'),
  title: 'Don Gobbi - Full Stack Developer & AI Specialist',
  description: 'Full-stack developer specializing in AI and modern web technologies. Expert in FastAPI, Next.js, and cutting-edge AI solutions.',
  keywords: 'Full Stack Developer, AI Specialist, FastAPI, Next.js, React, Machine Learning, Web Development',
  authors: [{ name: 'Don Gobbi' }],
  openGraph: {
    title: 'Don Gobbi - Full Stack Developer & AI Specialist',
    description: 'Full-stack developer specializing in AI and modern web technologies. Expert in FastAPI, Next.js, and cutting-edge AI solutions.',
    url: 'https://dongobbi.github.io',
    siteName: 'Don Gobbi Portfolio',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#61DAFB" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-[#282c34] to-[#20232a]">
          {/* React-inspired subtle pattern */}
          <div className="fixed inset-0 z-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
