import { env } from '@/lib/env'

export const SEO = {
  name: 'Tech Store',
  description: 'Seu e-commerce especializado em tecnologia!',
  url: env.NEXT_PUBLIC_APP_URL,
} as const
