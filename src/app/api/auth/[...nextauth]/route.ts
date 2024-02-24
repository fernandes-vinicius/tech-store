import NextAuth from 'next-auth'

import { authOPtions } from '@/app/_lib/auth'

const handler = NextAuth(authOPtions)

export { handler as GET, handler as POST }
