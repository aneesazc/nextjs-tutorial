"use client"

import { useState } from "react"

const Client = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Client Page</h1>
      <p className="text-2xl mb-4">You clicked {count} times</p>
      <button
        className="btn btn-primary uppercase"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default Client