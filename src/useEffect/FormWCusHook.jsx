import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWCusHook = () => {
  const { formState, onInputsChange, username, email, password, resetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });
  //const {username, email, password}= formState
  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Username"
        value={username}
        name="username"
        onChange={onInputsChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="Correo"
        value={email}
        name="email"
        onChange={onInputsChange}
      />
      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        value={password}
        name="password"
        onChange={onInputsChange}
      />
      <button onClick={resetForm} className="btn btn-primary mt-4">Borrar</button>
    </>
  );
};
