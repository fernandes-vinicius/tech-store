import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { env } from '@/lib/env'
import { db } from '@/lib/prisma'

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV !== 'production',
  // callbacks: {
  //   async session({ session, user }) {
  //     session.user = {
  //       ...session.user,
  //       id: user.id,
  //     }
  //     return session
  //   },
  // },
} as AuthOptions
