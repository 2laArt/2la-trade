import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

type PrismaType = PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
declare global {
  namespace globalThis {
    var prisma: PrismaType
  }
}

const prisma = global.prisma || new PrismaClient({ log: ['info'] })
if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') global.prisma = prisma

export { prisma }
