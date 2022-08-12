import { createContext, useState } from "react";

export const ListContext = createContext([]);

export const ListProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState(0);
  const [type, setType] = useState("Entrada");
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider
      value={{
        description,
        setDescription,
        valor,
        setValor,
        type,
        setType,
        list,
        setList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
