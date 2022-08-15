import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"5xl"}
        py={5}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={"0.6rem"}>© Desenvolvido por Diego Sales. 2022</Text>
      </Container>
    </Box>
  );
};

export default Footer;
