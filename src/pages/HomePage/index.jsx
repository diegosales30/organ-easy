import { Box, useColorModeValue } from "@chakra-ui/react";
import BoxInput from "../../components/BoxInput";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW={"2000px"}
      margin={"auto"}
    >
      <Header />
      <BoxInput />
      <Footer />
    </Box>
  );
};

export default HomePage;
