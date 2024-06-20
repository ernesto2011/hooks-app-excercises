import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTodos } from "../hooks/useTodos";


export const TodoApp = () => {
   const { todos, handleDelete, handleToggleTodo, handleNewTodo, todosCount, pendingTodos} = useTodos()
  
  return (
    <>
      <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodos}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
            <TodoList todos={todos}  onDelete={ handleDelete} OnToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd 
            onNewTodo={handleNewTodo}
            
            />
        </div>
      </div>
    </>
  );
};
