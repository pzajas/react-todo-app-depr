export interface InterfaceTodo {
  title: string
  id: number
  completed: boolean
}

export interface InterfaceState {
  todos: InterfaceTodo[]
}
