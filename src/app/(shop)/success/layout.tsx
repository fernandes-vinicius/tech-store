import type { Metadata } from 'next'

import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Compra concluída',
}

type SuccessLayoutProps = Readonly<{ children: React.ReactNode }>

export default function SuccessLayout({ children }: SuccessLayoutProps) {
  return <Suspense fallback={null}>{children}</Suspense>
}
