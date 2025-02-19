import './globals.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Don Gobbi - Full Stack Developer & AI Specialist',
  description: 'Full-stack developer specializing in AI and modern web technologies. Expert in FastAPI, Next.js, and cutting-edge AI solutions.',
  keywords: 'Full Stack Developer, AI Specialist, FastAPI, Next.js, React, Machine Learning, Web Development',
  author: 'Don Gobbi',
  openGraph: {
    title: 'Don Gobbi - Full Stack Developer & AI Specialist',
    description: 'Full-stack developer specializing in AI and modern web technologies. Expert in FastAPI, Next.js, and cutting-edge AI solutions.',
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
        {/* Add custom meta tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        {/* Add custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Background Pattern */}
          <div className="fixed inset-0 z-0 opacity-5">
            <div className="absolute inset-0 bg-grid-pattern"></div>
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
