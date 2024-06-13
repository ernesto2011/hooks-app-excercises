import { useState } from "react";


export const useForm = (initialForm ={}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputsChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    onInputsChange
  }
}
