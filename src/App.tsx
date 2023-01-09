import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
