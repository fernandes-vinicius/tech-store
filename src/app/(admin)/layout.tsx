import type { Metadata } from 'next'

import { SEO } from '@/lib/seo'
import { AuthProvider } from '@/providers/auth-provider'

type AdminLayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
  title: {
    default: `${SEO.name} (Admin)`,
    template: `%s (Admin) | ${SEO.name}`,
  },
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AuthProvider>{children}</AuthProvider>
}
