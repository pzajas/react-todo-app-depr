import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { InterfaceTodoItem } from "../interfaces/todoInterface"
import { deleteTodo, completeTodo, updateTodo } from "../redux/slice/todoSlice"

const TodoItem = ({ todo }: InterfaceTodoItem) => {
  const [editInputActive, setEditInputActive] = useState(false)
  const [userEditInput, setUserEditInput] = useState("")

  const dispatch = useDispatch()

  const handleDeleteUserTodo = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  const handleCompleteUserTodo = () => {
    dispatch(completeTodo({ id: todo.id, completed: !todo.completed }))
  }

  const handleToggleEditInput = () => {
    setEditInputActive(!editInputActive)
  }

  const handleChangeUserInput = (e: FormEvent<HTMLInputElement>) => {
    setUserEditInput(e.currentTarget.value)
  }

  const handleSubmitEditedTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    userEditInput.length > 0
      ? dispatch(updateTodo({ id: todo.id, title: userEditInput }))
      : alert("You cannot add an empty todo.")
    setUserEditInput("")
    setEditInputActive(false)
  }

  return (
    <div>
      {editInputActive ? (
        <form onSubmit={handleSubmitEditedTodo}>
          <input value={userEditInput} onChange={handleChangeUserInput} />
          <button>Update</button>
        </form>
      ) : (
        <li>
          {todo.title} <button onClick={handleDeleteUserTodo}>del</button>
          <button onClick={handleCompleteUserTodo}>com</button>
          <button onClick={handleToggleEditInput}>Update</button>
        </li>
      )}
    </div>
  )
}

export default TodoItem
