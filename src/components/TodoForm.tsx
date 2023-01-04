import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slice/todoSlice"

const TodoForm = () => {
  const [userInput, setUserInput] = useState("")

  const dispatch = useDispatch()

  const handleChangeUserInput = (e: FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmitUserInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addTodo({ title: userInput }))

    setUserInput("")
  }

  return (
    <form onSubmit={handleSubmitUserInput}>
      <input onChange={handleChangeUserInput} value={userInput} />
      <button>Submit</button>
    </form>
  )
}

export default TodoForm
