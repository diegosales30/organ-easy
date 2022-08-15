import { createContext, useContext } from "react";
import { ListContext } from "../List";

export const RemoveAllContext = createContext();

export const RemoveAllProvider = ({ children }) => {
  const { setList } = useContext(ListContext);

  //logica pra remover todos
  const deleteAllItem = () => {
    setList([]);
  };

  return (
    <RemoveAllContext.Provider value={{ deleteAllItem }}>
      {children}
    </RemoveAllContext.Provider>
  );
};
