import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.body;
  const session = await getSession({ req });
  const result = await prisma.todo.create({
    data: {
      title,
      user: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
