import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import NightMode from "../nightMode";
import { BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.50", "gray.900")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
            lineHeight={"110%"}
          >
            Organ
            <Text as={"span"} color={"orange.400"}>
              Easy
            </Text>
          </Heading>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            aria-label="Toggle Color Mode"
            _focus={{ boxShadow: "none" }}
            w="fit-content"
            onClick={() => handleNavigation("/")}
          >
            <BsBoxArrowRight />
          </Button>

          <NightMode />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
