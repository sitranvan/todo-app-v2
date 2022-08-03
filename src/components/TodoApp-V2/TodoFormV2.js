import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoForm({ input, setInput, onAdd }) {
  return (
    <form className="main">
      <div className="form">
        <input
          placeholder="Add todo..."
          input={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="create-update" onClick={onAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
