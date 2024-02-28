import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import { SEO } from '@/lib/seo'
import { AuthProvider } from '@/providers/auth-provider'
import { CartProvider } from '@/providers/cart-provider'

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
          <CartProvider>
            <div className="flex h-full flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
