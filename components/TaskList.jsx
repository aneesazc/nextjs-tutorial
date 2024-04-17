import Link from "next/link"
import DeleteForm from "./DeleteForm"
import { getAllTasks } from "@/utils/actions"


const TaskList = async () => {
    const tasks = await getAllTasks()
    if(!tasks) {
        return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
    }
  return (
    <ul className="mt-8">
        {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between px-6 py-4 bg-base-200 mb-4 rounded-lg border border-base-300 shadow-lg">
            <h2 className={`text-lg capitalize ${task.completed ? "line-through": null}`}>
                {task.content}
            </h2>
            <div className="flex gap-6 items-center">
                <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">Edit</Link>
                <DeleteForm id={task.id} />
            </div>
            </li>
        ))}
    </ul>
  )
}

export default TaskList