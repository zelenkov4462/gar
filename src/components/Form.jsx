import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

export const Form = ({
  value,
  setValue,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  inputRef,
}) => {
  const updateTodo = (newTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return { ...newTodo, title: value };
        } else {
          return todo;
        }
      })
    );
    setEditTodo(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editTodo) {
      updateTodo(editTodo);
    } else {
      setTodos([...todos, { id: uuid(), title: value, completed: false }]);
      setValue("");
    }
  };

  useEffect(() => {
    if (editTodo) {
      setValue(editTodo.title);
    } else {
      setValue("");
    }
  }, [editTodo, setValue]);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
};
