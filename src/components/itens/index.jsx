import { useContext } from "react";

import { FilterContext } from "../../providers/Filter";

import Entrada from "../Entrada";
import Saida from "../Saida";
import Todos from "../Todos";

const Itens = () => {
  const { estado } = useContext(FilterContext);

  return (
    <>{estado === 0 ? <Todos /> : estado === 1 ? <Entrada /> : <Saida />}</>
  );
};
export default Itens;
