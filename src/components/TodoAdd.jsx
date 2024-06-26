import React, { useState } from "react";
import { useForm } from "../hooks";

export const TodoAdd = ({onNewTodo}) => {
    const {description, onInputsChange, resetForm} =useForm({
        description:''
    })
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(description.length <=1) return;
        const newTodo= {
            id: new Date().getTime(),
            description,
            done: false
        }
        onNewTodo(newTodo)
        resetForm()
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name='description'
        value={description}
        onChange={onInputsChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
