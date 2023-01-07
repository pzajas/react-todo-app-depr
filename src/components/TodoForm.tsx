import { FormEvent, ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slice/todoSlice"
import { updateSearchQuery } from "../redux/slice/searchSlice"

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
    <div>
      {toggleSearchBar ? (
        <input value={searchValue} onChange={handleChangeSearchInput} />
      ) : (
        <form onSubmit={handleSubmitUserInput}>
          <input onChange={handleChangeUserInput} value={userInput} />
          <button>Submit</button>
        </form>
      )}

      <button onClick={handleToggleSearchBar}>Search</button>
    </div>
  )
}

export default TodoForm
