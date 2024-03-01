import Provider from 'next-auth/providers/google'

import { env } from '@/lib/env'

export const GoogleProvider = Provider({
  clientId: env.GOOGLE_CLIENT_ID,
  clientSecret: env.GOOGLE_CLIENT_SECRET,
})
