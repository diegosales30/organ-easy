import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoLanding.png";

const LandingPage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    toast({
      description: `Bem-vindo!`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    return navigate(path);
  };

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={"white"}
        >
          Organ
          <Text as={"span"} color={"orange.400"}>
            Easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Centralize e controle suas finanças. A OrganEasy nasceu para ajudar
          você a organizar seus gastos. Nunca foi tão fácil organizar suas
          finanças de forma fácil e eficiente, totalmente gratuita e sem
          burocracia.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
            onClick={() => handleNavigation("/home")}
          >
            Iniciar
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default LandingPage;

export const Illustration = (props) => {
  return (
    <>
      <Image src={logo} {...props} margin={"auto"} />
    </>
  );
};
