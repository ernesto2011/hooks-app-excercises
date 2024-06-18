import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {
  return (
    <div className="list-group">
    {
        todos.map(todo =>(
            <TodoItem key={todo.id} todo={todo}/>
        ))
    }
  </div>
  )
}
