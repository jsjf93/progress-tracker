import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma'
import { Todo } from "@prisma/client"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const todo = await prisma.todo.findUnique({
    where: { id: Number(params?.id) || -1 },
    include: {
      user: { select: { name: true }}
    }
  })

  return { props: { todo } };
}

type Props = {
  todo: Todo & {
    user: {
      name: string;
    };
  }
}

const Post: React.FC<Props> = (props) => {
  const { todo: { title, user: { name } },  } = props

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {name || "Unknown user"}</p>
      </div>
    </Layout>
  )
}

export default Post
