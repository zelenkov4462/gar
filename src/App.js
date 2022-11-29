import "./App.css";
import { Form } from "./components/Form";
import { useRef, useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const [value, setValue] = useState();
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const inputRef = useRef(null);

  return (
    <div className="App">
      Todo list
      <Form
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
        inputRef={inputRef}
      />
      <TodoList
        inputRef={inputRef}
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
