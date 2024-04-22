import { AuthOptions, type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import YandexProvider from 'next-auth/providers/yandex'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/shared/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { paths } from '@/shared/routing'

const prismaAdapter = PrismaAdapter(prisma)
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  pages: {
    signIn: paths.singIn,
  },
  adapter: {
    ...prismaAdapter,
    createUser: async (data: any) => {
      const user = await prisma.user.create({
        data,
      })

      await prisma.userCart.create({
        data: {
          userId: user.id,
        },
      })
      return user
    },
  } as AuthOptions['adapter'],
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      }
    },
  },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_SECRET as string,
    }),
    // ...add more providers here
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
}
