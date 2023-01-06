import { createSlice } from "@reduxjs/toolkit"
import { InterfaceTodo } from "../../interfaces/todoInterface"

const initialState: InterfaceTodo[] = []

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        id: Math.random() * 100,
        completed: false,
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    completeTodo: (state, action) => {
      state.findIndex(todo => (todo.id === action.payload.id ? (todo.completed = action.payload.completed) : null))
    },
    clearTodos: state => {
      return (state = initialState)
    },
  },
})

export const { addTodo, deleteTodo, completeTodo, clearTodos } = todoSlice.actions
export default todoSlice.reducer
