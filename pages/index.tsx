import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import prisma from '../lib/prisma';
import { Todo } from '@prisma/client';
import Link from 'next/link';
import { getSession } from 'next-auth/client';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  let todos = [];
  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
      select: { id: true },
    });

    todos = await prisma.todo.findMany({
      where: { deleted: false, userId: user.id },
      include: {
        user: {
          select: { name: true },
        },
      },
    });
  }
  return { props: { todos } };
};

type Props = {
  todos: (Todo & {
    user: { name: string };
  })[];
};

const Todos: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Todos by user</h1>
        <main>
          {props.todos.map((todo) => (
            <div key={todo.id}>
              <Link href={`/p/${todo.id}`}>
                {`${todo.title} - ${todo.user.name}`}
              </Link>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Todos;
