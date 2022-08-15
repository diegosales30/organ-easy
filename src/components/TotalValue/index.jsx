import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ListContext } from "../../providers/List";

const TotalValue = () => {
  const { list } = useContext(ListContext);

  const total = list.reduce(
    (a, b) => (b.type === "Entrada" ? a + b.valor : a - b.valor),
    0
  );

  return (
    <Box w={"100%"} padding={"30px"}>
      <Flex
        h={"50px"}
        boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
        borderRadius={"5px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          color={"orange.400"}
          paddingLeft={5}
          fontWeight={"600"}
          fontSize={"0.9rem"}
          as="span"
        >
          Total:
        </Box>
        <Box
          color={"orange.400"}
          paddingRight={5}
          fontWeight={"600"}
          fontSize={"0.9rem"}
          as="span"
        >
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl",
          }).format(total)}
        </Box>
      </Flex>
    </Box>
  );
};

export default TotalValue;
