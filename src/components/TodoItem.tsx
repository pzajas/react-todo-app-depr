import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { updateTodo } from "../redux/slice/todoSlice"
import { InterfaceTodoItem } from "../interfaces/todoInterface"

import TodoButtonContainer from "../elements/buttons/TodoButtonContainer"

const TodoItem = ({ todo }: InterfaceTodoItem) => {
  const [editInputActive, setEditInputActive] = useState(false)
  const [userEditInput, setUserEditInput] = useState("")

  const dispatch = useDispatch()

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
          <input value={userEditInput} onChange={handleChangeUserInput} autoFocus />
          <button>Update</button>
        </form>
      ) : (
        <li>
          <div onClick={handleToggleEditInput}>{todo.title}</div>
          <TodoButtonContainer todo={todo} />
        </li>
      )}
    </div>
  )
}

export default TodoItem
