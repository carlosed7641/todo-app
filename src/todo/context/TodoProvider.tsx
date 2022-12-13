import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false,
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false,
        }
    ],
    completed: 0,
    pending: 0
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: Props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  return (
    <TodoContext.Provider value={{
        todoState
    }}>
        {children}
    </TodoContext.Provider>
  )
}
