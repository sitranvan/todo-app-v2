import React, { useState } from "react";
import TodoForm from "./TodoFormV2";
import TodoList from "./TodoListV2";
import { v4 } from "uuid";
function TodoAppV2() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: v4(), title: input, isCompleted: false }]);
    setInput("");
  };

  const handleRemove = (todo) => {
    const index = todos.findIndex((td) => td.id === todo.id);
    const todosRemove = [...todos];
    todosRemove.splice(index, 1);
    setTodos(todosRemove);
  };
  const handleEdit = (todo, index) => {
    setInput("1234");
  };
  return (
    <div className="todo-app">
      <h2 className="title">Todo App</h2>
      <TodoForm input={input} setInput={setInput} onAdd={handleAdd} />
      <TodoList todos={todos} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  );
}

export default TodoAppV2;
