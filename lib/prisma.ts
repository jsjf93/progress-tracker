import { PrismaClient } from '@prisma/client'

const prismaClientPropertyName = `__prevent-name-collision__prisma`;
type GlobalThisWithPrismaClient = typeof globalThis & {
	[prismaClientPropertyName]: PrismaClient;
};

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  const globalWithPrisma = globalThis as GlobalThisWithPrismaClient; 
  if (!globalWithPrisma[prismaClientPropertyName]) {
    globalWithPrisma[prismaClientPropertyName] = new PrismaClient()
  }
  prisma = globalWithPrisma[prismaClientPropertyName]
}

export default prisma