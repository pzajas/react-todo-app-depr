//TODO

export interface InterfaceTodo {
  title: string
  id: number
  completed: boolean
}

export interface InterfaceTodoItem {
  todo: {
    title: string
    id: number
    completed: boolean
  }
}

export interface InterfaceState {
  todos: InterfaceTodo[]
}

//SEARCH

export interface InterfaceSearchPhrase {
  search: string
}
