//TODO

export interface InterfaceTodo {
  title: string
  id: number
  completed: boolean
}

export interface InterfaceTodoItem {
  todo: InterfaceTodo
}

export interface InterfaceState {
  globalReducer: {
    todos: InterfaceTodo[]
  }
}

//SEARCH

export interface InterfaceSearchPhrase {
  globalReducer: {
    search: string
  }
}
