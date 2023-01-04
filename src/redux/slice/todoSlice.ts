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
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
