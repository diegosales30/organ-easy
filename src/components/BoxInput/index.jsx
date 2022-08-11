import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ComponentInput from "../ComponentInput";
import ComponentList from "../ComponentList";
import TotalValue from "../TotalValue";

const BoxInput = () => {
  return (
    <Box
      border={"1px solid red"}
      w={"100vw"}
      h={"100vh"}
      maxW={"1280px"}
      minW={"800px"}
      bg={useColorModeValue("white", "gray.800")}
      display={"flex"}
      justifyContent={"space-around"}
      margin={"auto"}
      padding={"30px"}
      //   alterar maxw para 1280px, mudar o bg global pra branco
    >
      <Flex w={"100%"} justifyContent={"center"} flexDirection={"column"}>
        <ComponentInput />
        <TotalValue />
        {/* aqui dentro vai o componente input
            e o totalPrice
        */}
      </Flex>
      <Flex w={"100%"} justifyContent={"center"}>
        <ComponentList />
        {/* aqui dentro vai 3  componente
            search list e remover todos
        */}
      </Flex>
    </Box>
  );
};

export default BoxInput;
