import { createContext, useContext } from "react";
import { ListContext } from "../List";

export const RemoveContext = createContext();

export const RemoveProvider = ({ children }) => {
  const { list, setList } = useContext(ListContext);

  //logica pra remover
  const deleteItem = (indexBtn) => {
    const deleted = list.filter((current, index) => index !== indexBtn);
    setList(deleted);
  };

  return (
    <RemoveContext.Provider value={{ list, setList, deleteItem }}>
      {children}
    </RemoveContext.Provider>
  );
};
