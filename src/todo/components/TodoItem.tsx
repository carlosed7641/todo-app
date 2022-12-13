import { Todo } from '../interfaces/interfaces'
import { useTodos } from '../hooks/useTodos'


interface Props {
    todo: Todo
}

export const TodoItem = ({todo}: Props) => {


  const { toggleTodo } = useTodos()

  const handleDoubleClick = () => {
      toggleTodo(todo.id)  
  }

  return (
    <li 
    style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : ''
    }}
    onDoubleClick={handleDoubleClick}>
        {todo.desc}
    </li>
  )
}
