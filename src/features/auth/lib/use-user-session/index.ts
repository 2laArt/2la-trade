import { IUser } from '@/entities/user/model'
import { useSession } from 'next-auth/react'
// import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: IUser
  }
  interface User extends IUser {}
}
export const useUserSession = useSession
