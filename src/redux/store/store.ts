import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../slice/todoSlice"
import searchReducer from "../slice/searchSlice"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    search: searchReducer,
  },
})
