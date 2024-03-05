import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import { fontSans } from '@/lib/fonts'

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={fontSans.variable}>
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
