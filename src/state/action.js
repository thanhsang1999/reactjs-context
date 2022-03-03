import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";

const setTodoInput = (payload) => ({ type: SET_TODO_INPUT, payload });
const addTodoInput = (payload) => ({ type: ADD_TODO_INPUT, payload });

export { setTodoInput, addTodoInput };
