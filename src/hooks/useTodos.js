import { useEffect, useReducer } from 'react'
import { todoReducer } from '../useReducer/TodoReducer';

    
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos') ) ||[];
}

export const useTodos = () => {
const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
   
  
  const handleNewTodo = (todo) =>{
    const action ={
        type: '[TODO] Add Todo',
        payload:todo
    }
    dispatch(action)
  }
  const handleDelete =(id)=>{
    dispatch({
        type: '[TODO] Remove todo',
        payload: id
    })
  }
  const handleToggleTodo =(id)=>{
    console.log(id);
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
    })
  }
  return{
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter(todo=> !todo.done).length,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,


  }
}
