import { Box, Button } from "@chakra-ui/react";

const RemoveAll = () => {
  return (
    <Box w={"100%"} padding={"30px"}>
      <Button
        bg={"#ff574d"}
        _hover={"orange.400"}
        mt={4}
        w={"100%"}
        color={"white"}
      >
        Limpar lista
      </Button>
    </Box>
  );
};

export default RemoveAll;
