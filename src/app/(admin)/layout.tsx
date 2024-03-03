import type { Metadata } from 'next'

import { Footer } from '@/components/common/footer'
import { SEO } from '@/lib/seo'
import { AuthProvider } from '@/providers/auth-provider'

type AdminLayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
  title: {
    default: `${SEO.name} (Admin)`,
    template: `%s (Admin) |  ${SEO.name}`,
  },
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AuthProvider>
      <div className="flex h-full flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </AuthProvider>
  )
}
