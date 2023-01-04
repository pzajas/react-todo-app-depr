import { useSelector } from "react-redux"
import { InterfaceState, InterfaceTodo } from "../interfaces/todoInterface"

import TodoItem from "./TodoItem"

const TodoList = () => {
  const todos = useSelector((state: InterfaceState) => state.todos)
  return (
    <div>
      {todos.map((todo: InterfaceTodo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
