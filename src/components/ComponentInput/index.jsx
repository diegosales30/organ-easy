import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ListContext } from "../../providers/List";

const ComponentInput = () => {
  const {
    valor,
    setValor,
    description,
    setDescription,
    type,
    setType,
    list,
    setList,
  } = useContext(ListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { description, valor, type }]);
  };
  console.log(list);

  return (
    <Box w={"100%"} padding={"10px"} as={"form"} onSubmit={handleSubmit}>
      <FormControl
        padding={5}
        w={"100%"}
        boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
        borderRadius={"5px"}
      >
        <FormLabel fontWeight={"600"} fontSize={"0.9rem"} color={"orange.400"}>
          Descrição
        </FormLabel>
        <Input
          isRequired
          type="text"
          placeholder="Ex: Salário do mês"
          boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
          width={"100%"}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Flex display={"flex"} justifyContent={"space-between"}>
          <Box marginTop={"30px"} w="45%">
            <FormLabel
              fontWeight={"600"}
              fontSize={"0.9rem"}
              color={"orange.400"}
            >
              Valor
            </FormLabel>
            <Input
              isRequired
              type="number"
              placeholder="R$ 1,00"
              boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
              onChange={(event) => setValor(Number(event.target.value))}
            />
          </Box>
          <Box marginTop={"30px"} w="45%">
            <FormLabel
              fontWeight={"600"}
              fontSize={"0.9rem"}
              color={"orange.400"}
            >
              Entrada
            </FormLabel>
            <Select
              boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saida</option>
            </Select>
          </Box>
        </Flex>

        <Button
          type="submit"
          bg={"orange.400"}
          _hover={"orange.400"}
          mt={4}
          w={"100%"}
          marginTop={"50px"}
          color={"white"}
        >
          Adicionar
        </Button>
      </FormControl>
    </Box>
  );
};

export default ComponentInput;
