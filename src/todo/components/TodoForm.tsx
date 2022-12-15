import { useState, ChangeEvent, FormEvent } from "react";
import { useTodos } from "../hooks/useTodos";
import uuid from "react-uuid";

export const TodoForm = () => {
  const [desc, setDesc] = useState<string>("");
  const { addTodo } = useTodos();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setDesc(value);
  };

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({ id: uuid(), desc, completed: false });
    setDesc("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <h2>Agregar TODO</h2>
      <label htmlFor="desc" style={{ marginRight: 5 }}>
        Descripción:
      </label>
      <input
        type="text"
        placeholder="Descripción"
        name="desc"
        id="desc"
        value={desc}
        onChange={handleChange}
      />
    </form>
  );
};
