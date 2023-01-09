import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { updateTodo } from "../redux/slice/todoSlice"
import { InterfaceTodoItem } from "../interfaces/todoInterface"

import TodoButtonContainer from "../elements/buttons/TodoButtonContainer"
import styled from "styled-components"

const StyledTodoItemContainer = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #404040;
  border-radius: 2px;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #505050;
  }
`

const StyledFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledTodoText = styled.div`
  margin-left: 0.5rem;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  cursor: pointer;
`

const TodoItem = ({ todo }: InterfaceTodoItem) => {
  const [editInputActive, setEditInputActive] = useState(false)
  const [userEditInput, setUserEditInput] = useState("")

  const dispatch = useDispatch()

  const handleToggleEditInput = () => {
    setEditInputActive(!editInputActive)
  }

  const handleChangeUserInput = (e: FormEvent<HTMLInputElement>) => {
    setUserEditInput(e.currentTarget.value)
  }

  const handleSubmitEditedTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    userEditInput.length > 0
      ? dispatch(updateTodo({ id: todo.id, title: userEditInput }))
      : alert("You cannot add an empty todo.")
    setUserEditInput("")
    setEditInputActive(false)
  }

  return (
    <div>
      {editInputActive ? (
        <StyledFormContainer onSubmit={handleSubmitEditedTodo}>
          <input value={userEditInput} onChange={handleChangeUserInput} autoFocus />
          <button>Update</button>
        </StyledFormContainer>
      ) : (
        <StyledTodoItemContainer>
          <StyledTodoText onClick={handleToggleEditInput}>{todo.title}</StyledTodoText>
          <TodoButtonContainer todo={todo} />
        </StyledTodoItemContainer>
      )}
    </div>
  )
}

export default TodoItem
