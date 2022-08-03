import {
  faCircleCheck,
  faPenToSquare,
  faTrashCanArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

function TodoList({ todos, setTodos, setInput, updateRef }) {
  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    updateRef.current = -1;
  };
  const handleEdit = (todo, index) => {
    updateRef.current = index;
    setInput(todo.title);
  };
  // map return => newArray
  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <ul className="list">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="item"
            style={
              todo.isCompleted
                ? { backgroundColor: "#dddddd" }
                : { backgroundColor: todo.color }
            }
          >
            <span
              style={
                todo.isCompleted ? { textDecoration: "line-through" } : null
              }
            >
              {todo.title}
            </span>
            <div className="action">
              <button
                className="edit"
                onClick={() => handleEdit(todo, index)}
                style={todo.isCompleted ? { display: "none" } : null}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="remove"
                onClick={() => handleRemove(index)}
                style={todo.isCompleted ? { display: "none" } : null}
              >
                <FontAwesomeIcon icon={faTrashCanArrowUp} />
              </button>
              <button className="check" onClick={() => handleCheck(todo.id)}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TodoList);
