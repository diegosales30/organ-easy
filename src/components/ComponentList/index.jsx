import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ListContext } from "../../providers/List";
import { RiDeleteBin2Line } from "react-icons/ri";
import RemoveAll from "../RemoveAll";
import { RemoveContext } from "../../providers/Remove";

const ComponentList = () => {
  const { list } = useContext(ListContext);
  const { deleteItem } = useContext(RemoveContext);

  console.log(list);
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
        <Box w={"100%"} h={"250px"} overflow={"scroll"}>
          <UnorderedList margin={"auto"} padding={1}>
            {list.length === 0 ? (
              <Heading
                as={"h4"}
                fontSize={"1.2rem"}
                textAlign={"center"}
                marginTop={"10px"}
              >
                Oops, Nada foi adicionado.
              </Heading>
            ) : (
              list.map((item, index) =>
                item.type === "Entrada" ? (
                  <ListItem
                    key={index}
                    borderLeft={"2px solid #03bb85"}
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
                        <RiDeleteBin2Line
                          cursor={"pointer"}
                          color={"#ff6961"}
                        />
                      </Button>

                      <Text as={"p"} marginTop={1} fontSize={"0.8rem"}>
                        {new Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.valor)}
                      </Text>
                    </Box>
                  </ListItem>
                ) : (
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
                        bg={"transparent"}
                      >
                        <RiDeleteBin2Line
                          cursor={"pointer"}
                          color={"#ff6961"}
                        />
                      </Button>
                      <Text as={"p"} marginTop={1} fontSize={"0.8rem"}>
                        {new Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.valor)}
                      </Text>
                    </Box>
                  </ListItem>
                )
              )
            )}
          </UnorderedList>
        </Box>
      </Box>
      <RemoveAll />
    </Box>
  );
};

export default ComponentList;
