import { FormEvent, useState } from "react"

const TodoForm = () => {
  const [userInput, setUserInput] = useState("")

  const handleChangeUserInput = (e: FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmitUserInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
