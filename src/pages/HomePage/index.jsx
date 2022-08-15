import { Box } from "@chakra-ui/react";
import BoxInput from "../../components/BoxInput";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <Box maxW={"2000px"} margin={"auto"} h={"100vh"} minH={"846px"}>
      <Header />
      <BoxInput />
      <Footer />
    </Box>
  );
};

export default HomePage;
