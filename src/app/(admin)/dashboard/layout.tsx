import type { Metadata } from 'next'

import { Sidebar } from './_components/sidebar'

type DashboardLayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-full grid-cols-[minmax(0,_300px)_1fr]">
      <Sidebar />
      {children}
    </div>
  )
}
