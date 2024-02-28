import './globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import { fontSans } from '@/lib/fonts'
import { SEO } from '@/lib/seo'
import { AuthProvider } from '@/providers/auth-provider'
import { CartProvider } from '@/providers/cart-provider'

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
      <body className={fontSans.variable}>
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
