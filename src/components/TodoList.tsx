import { useDispatch, useSelector } from "react-redux"
import { InterfaceState, InterfaceTodo } from "../interfaces/todoInterface"
import { clearTodos } from "../redux/slice/todoSlice"

import TodoItem from "./TodoItem"

const TodoList = () => {
  const todos = useSelector((state: InterfaceState) => state.todos)

  const dispatch = useDispatch()

  const handleDeleteUserTodos = () => {
    dispatch(clearTodos())
  }
  return (
    <div>
      <div>
        {todos.map((todo: InterfaceTodo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
      <button onClick={handleDeleteUserTodos}>Delete All</button>
    </div>
  )
}

export default TodoList
