import { FormEvent, ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slice/todoSlice"
import { updateSearchQuery } from "../redux/slice/searchSlice"

import styled from "styled-components"

const StyledFormContainerWithButtons = styled.div`
  display: flex;
  justify-content: center;
`

const StyledFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledInputField = styled.input`
  border: none;
  background: #262626;
  color: white;
  outline: none;
  width: 100%;
  height: 1.6rem;
  padding-left: 0.5rem;
  border-radius: 0.1rem;
  cursor: pointer;
`

const TodoForm = () => {
  const [userInput, setUserInput] = useState("")
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const dispatch = useDispatch()

  const handleChangeUserInput = (e: FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)

    dispatch(updateSearchQuery(e.target.value))
  }

  const handleSubmitUserInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addTodo({ title: userInput }))

    setUserInput("")
  }

  const handleToggleSearchBar = () => {
    dispatch(updateSearchQuery(""))
    setSearchValue("")
    setToggleSearchBar(!toggleSearchBar)
  }

  return (
    <StyledFormContainerWithButtons>
      {toggleSearchBar ? (
        <StyledInputField value={searchValue} onChange={handleChangeSearchInput} />
      ) : (
        <StyledFormContainer onSubmit={handleSubmitUserInput}>
          <StyledInputField onChange={handleChangeUserInput} value={userInput} />
          <button>Submit</button>
        </StyledFormContainer>
      )}

      <button onClick={handleToggleSearchBar}>Search</button>
    </StyledFormContainerWithButtons>
  )
}

export default TodoForm
