import type { Metadata } from 'next'

import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
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

type ShopLayoutProps = Readonly<{ children: React.ReactNode }>

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}
