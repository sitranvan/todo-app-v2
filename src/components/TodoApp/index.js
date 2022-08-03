import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import randomColor from "./randomColor";
function TodoApp() {
  const initState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initState);
  const updateRef = useRef(-1);
  const colorRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    colorRef.current = randomColor();
  }, [todos]);

  return (
    <div className="todo-app">
      <h2 className="title">Todo App</h2>
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        updateRef={updateRef}
        color={colorRef}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        updateRef={updateRef}
      />
    </div>
  );
}

export default TodoApp;
