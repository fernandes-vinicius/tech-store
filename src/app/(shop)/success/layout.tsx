import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compra concluída',
}

type SuccessLayoutProps = Readonly<{ children: React.ReactNode }>

export default function SuccessLayout({ children }: SuccessLayoutProps) {
  return children
}
