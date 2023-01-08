import { useDispatch } from "react-redux"
import { InterfaceTodoItem } from "../../interfaces/todoInterface"
import { deleteTodo, completeTodo } from "../../redux/slice/todoSlice"

const TodoButtonContainer = ({ todo }: InterfaceTodoItem) => {
  const dispatch = useDispatch()

  const handleDeleteUserTodo = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  const handleCompleteUserTodo = () => {
    dispatch(completeTodo({ id: todo.id, completed: !todo.completed }))
  }

  return (
    <div>
      <button onClick={handleDeleteUserTodo}>del</button>
      <button onClick={handleCompleteUserTodo}>com</button>
    </div>
  )
}

export default TodoButtonContainer
