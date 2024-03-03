import type { Metadata } from 'next'

import { SEO } from '@/lib/seo'
import { AuthProvider } from '@/providers/auth-provider'

import { Sidebar } from './_components/sidebar'

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
      <div className="grid h-full grid-cols-[minmax(0,_300px)_1fr]">
        <Sidebar />
        {children}
      </div>
    </AuthProvider>
  )
}
