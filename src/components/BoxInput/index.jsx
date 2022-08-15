import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ComponentInput from "../ComponentInput";
import ComponentList from "../ComponentList";

import TotalValue from "../TotalValue";

const BoxInput = () => {
  return (
    <Box w={"100%"} h={"100%"} bg={useColorModeValue("white", "gray.800")}>
      <Flex
        w={"100%"}
        h={"100%"}
        display={["block", "block", "flex", "flex"]}
        maxW={"1280px"}
        minW={"380px"}
        //bg={useColorModeValue("white", "gray.800")}
        justifyContent={"space-between"}
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
          {/* <RemoveAll /> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default BoxInput;
