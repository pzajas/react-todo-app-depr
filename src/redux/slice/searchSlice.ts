import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { updateSearchQuery } = searchSlice.actions
export default searchSlice.reducer
