import { useDispatch } from "react-redux"
import { InterfaceTodoItem } from "../interfaces/todoInterface"
import { deleteTodo, completeTodo } from "../redux/slice/todoSlice"

const TodoItem = ({ todo }: InterfaceTodoItem) => {
  const dispatch = useDispatch()

  const handleDeleteUserTodo = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  const handleCompleteUserTodo = () => {
    dispatch(completeTodo({ id: todo.id, completed: !todo.completed }))
  }

  return (
    <li>
      {todo.title} <button onClick={handleDeleteUserTodo}>del</button>
      <button onClick={handleCompleteUserTodo}>com</button>
    </li>
  )
}

export default TodoItem
