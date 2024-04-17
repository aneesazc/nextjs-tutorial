"use client"

const error = (e) => {
    console.error(e)
    return (
        <div>
        <h1 className="text-5xl mb-8 font-bold">Error</h1>
        <p>{e.error.message}</p>
        </div>
    )
}

export default error