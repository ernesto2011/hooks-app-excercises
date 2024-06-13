import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWCusHook = () => {
  const { formState, onInputsChange } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const {username, email, password}= formState
  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={username}
        name="username"
        onChange={onInputsChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Correo"
        value={email}
        name="email"
        onChange={onInputsChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={password}
        name="email"
        onChange={onInputsChange}
      />
    </>
  );
};
