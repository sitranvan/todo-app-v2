import {
  faCircleCheck,
  faPenToSquare,
  faTrashCanArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

function TodoList({ todos, onRemove, onEdit }) {
  return (
    <div>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={todo.id} className="item">
            <span>{todo.title}</span>
            <div className="action">
              <button className="edit" onClick={() => onEdit(todo, index)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button className="remove" onClick={() => onRemove(todo)}>
                <FontAwesomeIcon icon={faTrashCanArrowUp} />
              </button>
              <button className="check">
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
