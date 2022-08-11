import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const ComponentList = () => {
  return (
    <Box border={"1px solid red"} w={"100%"} h={"100%"} padding={"30px"}>
      <FormControl w={"100%"} h={"50%"} border={"1px solid blue"}>
        <FormLabel>Descrição</FormLabel>
        <Input type="text" placeholder="Ex: Salário do mês" />

        <Flex>
          <Box w="50%" border="1px solid red">
            <FormLabel>Valor</FormLabel>
            <Input type="number" placeholder="R$ 1,00" />
          </Box>
          <Box w="50%" border="1px solid red">
            <FormLabel>Entrada</FormLabel>
            <Select>
              <option value="1">Entrada</option>
              <option value="0">Saída</option>
            </Select>
          </Box>
        </Flex>
        <Button variantColor="teal" mt={4}>
          Adicionar
        </Button>
      </FormControl>
    </Box>
  );
};

export default ComponentList;
