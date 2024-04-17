import { createTask } from "@/utils/actions"


const TaskForm = () => {
  return (
    <form action={createTask}>
        <div className="join w-full">
        <input type="text" placeholder="Add a task"
            name="content" required
            className="input input-bordered join-item w-full"
        />
        <button type="submit" className="btn btn-primary join-item">Add Task</button>
        </div>
    </form>
  )
}

export default TaskForm