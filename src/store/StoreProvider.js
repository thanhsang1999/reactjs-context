import React, { useReducer } from "react";
import reducer, { initState } from "../state/reducer";
import logger from "../Utils/logger";
import Context from "./StoreContext";

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default StoreProvider;
