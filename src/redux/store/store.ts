import { configureStore, combineReducers } from "@reduxjs/toolkit"
import todoReducer from "../slice/todoSlice"
import searchReducer from "../slice/searchSlice"

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const rootReducer = combineReducers({ todos: todoReducer, search: searchReducer })

export const store = configureStore({
  reducer: {
    globalReducer: persistReducer(persistConfig, rootReducer),
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
