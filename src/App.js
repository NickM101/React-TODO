import { useState } from "react"
import BodyComponent from "./components/Body"
import HeaderComponent from "./components/Header"
import InputComponent from "./components/Input"
import ListComponent from "./components/List"

function App() {
  const [data, setData] = useState([])

  const addTask = (input) => {
    let copy = [...data]
    copy = [...copy, { id: data.length + 1, task: input, completed: false }]
    setData(copy)
  }

  const handleClick = (id) => {
    let mapped = data.filter((item) => item.id !== id)
    setData(mapped)
  }

  return (
    <BodyComponent>
      <HeaderComponent />
      <InputComponent addTask={addTask} />
      <ListComponent list={data} handleClick={handleClick} />
    </BodyComponent>
  )
}

export default App
