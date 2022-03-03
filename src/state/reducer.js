import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case SET_TODO_INPUT:
      return { ...state, todoInput: action.payload };
    case ADD_TODO_INPUT:
      return { ...state, todos: [...state.todos, state.todoInput] };
    default:
      throw new Error('invalid')
  }
};
export { initState };
export default reducer;
