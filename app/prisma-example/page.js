import prisma from "@/utils/db"


const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "Learn Prisma",
  //   }
  // })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return allTasks
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers()
  // console.log(tasks)
  if (tasks.length === 0) {
    return <div>There are no tasks</div>
  }
  return (
    <div>
      <h1 className="text-5xl">Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default PrismaExample