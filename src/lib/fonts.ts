import { Poppins } from 'next/font/google'

export const fontSans = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})
