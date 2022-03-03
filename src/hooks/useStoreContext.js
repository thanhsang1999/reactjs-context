import { useContext } from "react";
import { StoreContext } from "../store";

const useStoreContext = () => {
  const [state, dispatch] = useContext(StoreContext);
  return [state, dispatch];
};
export default useStoreContext;
