import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from '@/app/_lib/prisma'
import { env } from '@/app/_lib/env'

export const authOPtions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV !== 'production',
} as AuthOptions
