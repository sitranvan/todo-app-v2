import { faCircleUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { v4 } from "uuid";
function TodoForm({ input, setInput, todos, setTodos, updateRef, color }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: v4(), title: input, color: color.current, isCompleted: false },
    ]);
    setInput("");
    inputRef.current.focus();
    updateRef.current = -1;
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const newTodoUpdate = [...todos];
    newTodoUpdate[updateRef.current].title = input;
    setTodos(newTodoUpdate);
    setInput("");
    inputRef.current.focus();
    updateRef.current = -1;
  };
  return (
    <form className="main">
      <div className="form">
        <input
          ref={inputRef}
          placeholder="Add todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {updateRef.current !== -1 ? (
          <button className="create-update" onClick={handleUpdate}>
            <FontAwesomeIcon icon={faCircleUp} />
          </button>
        ) : (
          <button className="create-update" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
