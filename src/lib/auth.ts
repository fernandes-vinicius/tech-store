import { AuthOptions } from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { GoogleProvider } from '@/lib/auth-providers/google-provider'
import { db } from '@/lib/prisma'

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [GoogleProvider],
  debug: process.env.NODE_ENV !== 'production',
  callbacks: {
    async session({ session, user }) {
      session.user = {
        ...session.user,
        id: user.id,
      }
      return session
    },
  },
} as AuthOptions
