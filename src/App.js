import "./App.css";
import { useStoreContext } from "./hooks";
import { addTodoInput, setTodoInput } from "./state/action";

function App() {
  const [state, dispatch] = useStoreContext();
  const { todoInput, todos } = state;
  return (
    <div className="App">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => dispatch(setTodoInput(e.target.value))}
      />
      <button onClick={() => dispatch(addTodoInput())}>Add</button>
      <ul>
        {Array.from(todos).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
