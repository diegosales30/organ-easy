import { createContext, useContext, useState } from "react";
import { ListContext } from "../List";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { list } = useContext(ListContext);
  const [estado, setEStado] = useState([]);

  const filteredEntrada = list.filter((item) => item.type === "Entrada");

  const filteredSaida = list.filter((item) => item.type === "Despesas");

  return (
    <FilterContext.Provider
      value={{
        filteredEntrada,
        filteredSaida,
        estado,
        setEStado,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
