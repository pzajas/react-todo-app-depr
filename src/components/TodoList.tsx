import { useDispatch, useSelector } from "react-redux"
import { InterfaceState, InterfaceSearchPhrase } from "../interfaces/todoInterface"
import { clearTodos } from "../redux/slice/todoSlice"

import TodoItem from "./TodoItem"

const TodoList = () => {
  const todos = useSelector((state: InterfaceState) => state.globalReducer.todos)
  const searchPhrase = useSelector((state: InterfaceSearchPhrase) => state.globalReducer.search)

  const dispatch = useDispatch()

  const todosFiltered = todos.filter(todo => todo.title.toLowerCase().includes(searchPhrase.toLowerCase()))

  const hanleDeleteUserTodos = () => {
    todos.length > 0 ? dispatch(clearTodos()) : alert("The list is already empty.")
  }

  return (
    <div>
      {searchPhrase.length > 0 ? (
        <div>
          {todosFiltered.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      ) : (
        todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
      )}
      <button onClick={hanleDeleteUserTodos}>Delete all</button>
    </div>
  )
}

export default TodoList
