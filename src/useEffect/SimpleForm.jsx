import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "user@",
    email: "demo@demo.com",
  });
  const { username, email } = formState;
  const onInputsChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    //console.log("useffect called");
  }, []);
  useEffect(() => {
    //console.log("formState changed!!");
  }, [formState]);
  useEffect(() => {
//console.log('email changed');
  },[email]);
  return (
    <>
      <h1>Simple Form</h1>
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
    {
        (username=== "user@") && <Message/>
    }
      
    </>
  );
};
