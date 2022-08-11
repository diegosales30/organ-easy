import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const ComponentInput = () => {
  return (
    <Box w={"100%"} padding={"30px"}>
      <FormControl
        padding={5}
        w={"100%"}
        //h={"50%"}
        boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
        borderRadius={"5px"}
      >
        <FormLabel fontWeight={"600"} fontSize={"0.9rem"} color={"orange.400"}>
          Descrição
        </FormLabel>
        <Input
          type="text"
          placeholder="Ex: Salário do mês"
          boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
          width={"100%"}
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
              type="number"
              placeholder="R$ 1,00"
              boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
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
            <Select boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}>
              <option value="1">Entrada</option>
              <option value="0">Saída</option>
            </Select>
          </Box>
        </Flex>

        <Button
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
