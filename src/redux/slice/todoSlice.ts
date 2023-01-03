import { createSlice } from "@reduxjs/toolkit"

interface InterfaceInitialState {
  title: string
  id: number
  completed: boolean
}

const initialState: InterfaceInitialState[] = [{ title: "test", id: 1, completed: false }]

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
})

export default todoSlice.reducer
