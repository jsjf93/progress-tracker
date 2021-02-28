import { getSession } from 'next-auth/client'
import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title
export default async function handle(req, res) {
  const { title } = req.body
  const session = await getSession({ req })
  const result = await prisma.todo.create({
    data: {
      title,
      user: { connect: { email: session?.user?.email }}
    },
  })
  res.json(result)
}