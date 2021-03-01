import prisma from '../../../lib/prisma';

// DELETE /api/todo/:id
export default async function handle(req, res) {
  const todoId = req.query.id;
  if (req.method === 'DELETE') {
    const todo = await prisma.todo.delete({
      where: { id: Number(todoId) },
    });
    res.json(todo);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
