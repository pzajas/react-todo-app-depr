import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

import styled from "styled-components"

const StyledApplicationContainer = styled.div`
  background-color: #181818;
  border-radius: 2px;
  align-items: center;
  margin-bottom: 0.3rem;
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem;

  & * {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
`

const App = () => {
  return (
    <StyledApplicationContainer>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </StyledApplicationContainer>
  )
}

export default App
