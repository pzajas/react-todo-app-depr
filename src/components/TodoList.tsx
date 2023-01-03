import { useSelector } from "react-redux"

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos)
  return (
    <div>
      {todos.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}

export default TodoList
