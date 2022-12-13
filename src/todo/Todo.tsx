import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from './components/TodoList';


export const Todo = () => {
  return (
   <TodoProvider>
        <h1>Todo: </h1>
        <TodoList />
   </TodoProvider>
  )
}
