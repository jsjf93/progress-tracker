import React from "react"
import { GetServerSideProps, GetStaticProps } from "next"
import Layout from "../components/Layout"
import prisma from '../lib/prisma'
import { Todo } from "@prisma/client"
import Link from "next/link"

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await prisma.todo.findMany({
    where: { deleted: false },
    include: {
      user: {
        select: { name: true },
      },
    },
  })
  return { props: { todos } }
}

type Props = {
  todos: (Todo & {
    user: { name: string; };
  })[];
}

const Todos: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Todos by user</h1>
        <main>
          {props.todos.map(todo =>
          <Link key={todo.id} href={`/p/${todo.id}`}>
            {`${todo.title} - ${todo.user.name}`}
          </Link>
          )}
        </main>
      </div>
    </Layout>
  )
}

export default Todos
