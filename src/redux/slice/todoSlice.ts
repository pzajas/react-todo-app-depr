import { createSlice } from "@reduxjs/toolkit"
import { InterfaceTodo } from "../../interfaces/todoInterface"

const initialState: InterfaceTodo[] = [{ title: "test", id: 1, completed: false }]

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
})

export default todoSlice.reducer
