import { env } from '@/lib/env'

export const SEO = {
  name: 'Tech Store',
  description: 'Sua loja de tecnologia',
  url: env.NEXT_PUBLIC_APP_URL,
} as const
