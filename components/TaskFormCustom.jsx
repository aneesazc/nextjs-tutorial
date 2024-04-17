"use client";

import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom"
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-primary join-item" disabled={pending}>
      {pending ? "Adding..." : "Add Task"}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)
  useEffect(() => {
    if(state.message === "error") {
      toast.error("An error occurred")
      return
    }
    if (state.message) {
      toast.success("Task added successfully")
    }
  }, [state])
  
  return (
    <form action={formAction}>
      {state.message && <p className="mb-2">{state.message}</p>}
        <div className="join w-full">
        <input type="text" placeholder="Add a task"
            name="content" required
            className="input input-bordered join-item w-full"
        />
        <SubmitBtn />
        </div>
    </form>
  )
}

export default TaskFormCustom