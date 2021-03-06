import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import prisma from '../lib/prisma';
import { Todo } from '@prisma/client';
import Link from 'next/link';
import { getSession } from 'next-auth/client';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '@components/Buttons';

type TodoWithUserName = Todo & {
  user: { name: string | null } | null;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  let todos: TodoWithUserName[] = [];
  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
      select: { id: true },
    });

    todos = await prisma.todo.findMany({
      where: { deleted: false, userId: user?.id },
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
  todos: TodoWithUserName[];
};

const Todos: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Todos by user</h1>
        <main>
          {props.todos.map((todo) => (
            <div key={todo.id}>
              <Link href={`/p/${todo.id}`}>{`${todo.title} - ${todo.user?.name}`}</Link>
            </div>
          ))}
          <PrimaryButton>Submit</PrimaryButton>
          <br />
          <br />
          <SecondaryButton>Submit</SecondaryButton>
          <br />
          <br />
          <TertiaryButton>Submit</TertiaryButton>
        </main>
      </div>
    </Layout>
  );
};

export default Todos;
