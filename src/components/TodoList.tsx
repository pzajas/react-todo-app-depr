import { useDispatch, useSelector } from "react-redux"
import { InterfaceState, InterfaceSearchPhrase } from "../interfaces/todoInterface"
import { clearTodos } from "../redux/slice/todoSlice"

import TodoItem from "./TodoItem"
import styled from "styled-components"

const StyledListContainer = styled.div`
  background-color: #181818;
  color: white;
  width: 100%;
`

const StyledButton = styled.button`
  background: none;
  color: red;
  font-weight: 600;
  width: 100%;
  height: 2rem;
  border: 1px #353535 solid;
  border-radius: 0.1rem;
  margin-top: 0.5rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    border-color: red;
  }
`

const TodoList = () => {
  const todos = useSelector((state: InterfaceState) => state.globalReducer.todos)
  const searchPhrase = useSelector((state: InterfaceSearchPhrase) => state.globalReducer.search)

  const dispatch = useDispatch()

  const todosFiltered = todos.filter(todo => todo.title.toLowerCase().includes(searchPhrase.toLowerCase()))

  const hanleDeleteUserTodos = () => {
    todos.length > 0 ? dispatch(clearTodos()) : alert("The list is already empty.")
  }

  return (
    <StyledListContainer>
      {searchPhrase.length > 0 ? (
        <div>
          {todosFiltered.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      ) : (
        todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
      )}
      <StyledButton onClick={hanleDeleteUserTodos}>Delete all</StyledButton>
    </StyledListContainer>
  )
}

export default TodoList
