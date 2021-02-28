import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma'
import { Todo } from "@prisma/client"
import Router from 'next/router'
import { useSession } from "next-auth/client"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const todo = await prisma.todo.findUnique({
    where: { id: Number(params?.id) || -1 },
    include: {
      user: { select: { name: true }}
    }
  })

  return { props: { todo } };
}

// TODO change to post and set deleted to true
async function deleteTodo(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: 'DELETE',
  })
  Router.push('/')
}

type Props = {
  todo: Todo & {
    user: {
      name: string;
    };
  }
}

const TodoItem: React.FC<Props> = (props) => {
  const [session, loading] = useSession()
  const userHasValidSession = Boolean(session)
  
  const { 
    todo: { 
      id,
      title,
      user: { name } }
  } = props

  if (loading) {
    return <div>Authenticating ...</div>
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {name || "Unknown user"}</p>
        { userHasValidSession && (
          <button onClick={() => deleteTodo(id)}>Delete</button>
        )}
      </div>
    </Layout>
  )
}

export default TodoItem
