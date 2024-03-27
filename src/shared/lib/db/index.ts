import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

type PrismaType = PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
declare global {
  namespace globalThis {
    var prisma: PrismaType
  }
}

let prisma: PrismaType

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export { prisma }
