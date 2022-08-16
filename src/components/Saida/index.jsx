import { Box, Button, ListItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FilterContext } from "../../providers/Filter";
// import { ListContext } from "../../providers/List";
import { RemoveContext } from "../../providers/Remove";

const Saida = () => {
  const { estado, filteredSaida } = useContext(FilterContext);
  //   const { list } = useContext(ListContext);
  const { deleteItem } = useContext(RemoveContext);
  return (
    <>
      {estado === 2 &&
        filteredSaida.map((item, index) => (
          <ListItem
            key={index}
            borderLeft={"2px solid #ff4040"}
            borderRadius={"4px"}
            listStyleType={"none"}
            boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.3)"}
            paddingLeft={"10px"}
            marginTop={"10px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text as={"span"} fontSize={"0.9rem"}>
              {item.description}
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginRight={"5px"}
              alignItems={"end"}
            >
              <Button
                onClick={() => deleteItem(index)}
                padding={0}
                bg={"transparent"}
              >
                <RiDeleteBin2Line cursor={"pointer"} color={"#ff6961"} />
              </Button>

              <Text as={"p"} marginTop={1} fontSize={"0.8rem"}>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.valor)}
              </Text>
            </Box>
          </ListItem>
        ))}
    </>
  );
};

export default Saida;
