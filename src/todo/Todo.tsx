import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from './components/TodoList';
import { Title } from "./components/Title";
import { TodoForm } from './components/TodoForm';


export const Todo = () => {
  return (
   <TodoProvider>
        <Title />
        <TodoList />
        <TodoForm />
   </TodoProvider>
  )
}
