import { useSelector } from "react-redux"
import { InterfaceState, InterfaceTodo } from "../interfaces/todoInterface"

const TodoList = () => {
  const todos = useSelector((state: InterfaceState) => state.todos)
  return (
    <div>
      {todos.map((todo: InterfaceTodo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}

export default TodoList
