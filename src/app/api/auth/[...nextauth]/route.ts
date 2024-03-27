import { authOptions } from '@/features/auth/auth-config'
import NextAuth from 'next-auth/next'

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }
