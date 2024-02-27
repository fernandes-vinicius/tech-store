import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { AuthProvider } from '@/providers/auth-provider'
import { SEO } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${SEO.name} - ${SEO.description}`,
    template: `%s | ${SEO.name}`,
  },
  description: SEO.description,
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
