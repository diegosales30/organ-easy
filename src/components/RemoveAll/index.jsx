import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { RemoveAllContext } from "../../providers/removeAll";

const RemoveAll = () => {
  const { deleteAllItem } = useContext(RemoveAllContext);
  return (
    <Box w={"100%"} padding={"30px"}>
      <Button
        bg={"#ff574d"}
        _hover={"orange.400"}
        mt={4}
        w={"100%"}
        color={"white"}
        onClick={deleteAllItem}
      >
        Limpar lista
      </Button>
    </Box>
  );
};

export default RemoveAll;
