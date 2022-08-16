import { Box, Button, Flex, Heading, UnorderedList } from "@chakra-ui/react";
import { useContext } from "react";
import { ListContext } from "../../providers/List";

import RemoveAll from "../RemoveAll";

import { FilterContext } from "../../providers/Filter";
import Itens from "../itens";

const ComponentList = () => {
  const { list } = useContext(ListContext);
  const { estado, filteredEntrada, filteredSaida } = useContext(FilterContext);

  const { setEStado } = useContext(FilterContext);

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
              onClick={() => setEStado(0)}
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
              onClick={() => setEStado(1)}
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
              onClick={() => setEStado(2)}
            >
              Saída
            </Button>
          </Box>
        </Flex>
        <Box w={"100%"} h={"250px"} overflow={"scroll"}>
          <UnorderedList margin={"auto"} padding={1}>
            {/* tentar resolver esse b.o */}
            {estado.length === 0 ? (
              <Heading
                as={"h4"}
                fontSize={"1.2rem"}
                textAlign={"center"}
                marginTop={"10px"}
              >
                Oops, Nada foi adicionado.
              </Heading>
            ) : (
              <Itens />
            )}
          </UnorderedList>
        </Box>
      </Box>
      <RemoveAll />
    </Box>
  );
};

export default ComponentList;
