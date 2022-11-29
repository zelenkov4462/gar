import React from "react";

export const TodoList = ({ todos, inputRef, setTodos, setEditTodo }) => {
  const changeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const editHandler = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    inputRef.current.focus();
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}

          <button onClick={() => editHandler(todo)}>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </div>
  );
};
