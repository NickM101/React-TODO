import { useState } from "react"

const InputComponent = ({ addTask }) => {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        className="rounded"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="bg-violet-500 p-2.5 w-32 mx-2 rounded">
        <p className="text-white">Add</p>
      </button>
    </form>
  )
}

export default InputComponent
