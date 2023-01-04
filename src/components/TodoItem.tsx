import { InterfaceTodoItem } from "../interfaces/todoInterface"

const TodoItem = ({ todo }: InterfaceTodoItem) => {
  return (
    <li>
      {todo.title} <button>complete</button> <button>delete</button>
    </li>
  )
}

export default TodoItem
