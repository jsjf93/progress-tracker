import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import prisma from '../lib/prisma';
import { Todo } from '@prisma/client';
import Link from 'next/link';
import { getSession } from 'next-auth/client';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '@components/buttons/Buttons';
import { SignUpModal } from '@components/Modal';

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
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="page">
      <h1>Todos by user</h1>
      <main>
        {/* {props.todos.map((todo) => (
            <div key={todo.id}>
              <Link href={`/p/${todo.id}`}>{`${todo.title} - ${todo.user?.name}`}</Link>
            </div>
          ))}
          <PrimaryButton onClick={() => setShowModal(true)}>Open modal</PrimaryButton> */}

        {/* <SignUpModal showModal={showModal} setShowModal={setShowModal} /> */}
      </main>
    </div>
  );
};

export default Todos;
