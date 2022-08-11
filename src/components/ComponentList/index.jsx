import { Box, Button, Flex } from "@chakra-ui/react";

const ComponentList = () => {
  return (
    <Box w={"100%"} padding={"10px"}>
      <Box
        w={"100%"}
        boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
        borderRadius={"5px"}
      >
        <Flex
          justify={"space-between"}
          alignItems={"center"}
          bg={"orange.400"}
          borderRadius={"5px 5px 0 0"}
        >
          <Box
            marginLeft={2}
            as={"span"}
            fontWeight={"600"}
            fontSize={"0.9rem"}
            color={"white"}
          >
            Resumo
          </Box>
          <Box padding={1}>
            <Button
              border={"none"}
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "orange.400", color: "gray.900" }}
              padding={0}
              margin={0}
              marginRight={5}
              fontWeight={"600"}
              fontSize={"0.8rem"}
            >
              Todos
            </Button>
            <Button
              border={"none"}
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "orange.400", color: "gray.900" }}
              padding={1}
              marginRight={5}
              fontWeight={"600"}
              fontSize={"0.8rem"}
            >
              Entrada
            </Button>
            <Button
              border={"none"}
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "orange.400", color: "gray.900" }}
              padding={1}
              marginRight={5}
              fontWeight={"600"}
              fontSize={"0.8rem"}
            >
              Saída
            </Button>
          </Box>
        </Flex>
        <Box w={"100%"} h={"250px"} padding={5}>
          coisas aqui{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentList;
