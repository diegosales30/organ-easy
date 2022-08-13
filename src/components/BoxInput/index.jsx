import { Flex, useColorModeValue } from "@chakra-ui/react";
import ComponentInput from "../ComponentInput";
import ComponentList from "../ComponentList";
import RemoveAll from "../RemoveAll";
import TotalValue from "../TotalValue";

const BoxInput = () => {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      display={["block", "block", "flex", "flex"]}
      maxW={"1700px"}
      minW={"380px"}
      bg={useColorModeValue("white", "gray.800")}
      justifyContent={"space-between"}
      //padding={"10px"}
      margin={"auto"}
    >
      <Flex
        w={"90%"}
        margin={"auto"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <ComponentInput />
        <TotalValue />
      </Flex>
      <Flex
        w={"90%"}
        margin={"auto"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <ComponentList />
        <RemoveAll />
      </Flex>
    </Flex>
  );
};

export default BoxInput;
