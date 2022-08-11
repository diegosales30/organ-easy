import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const NightMode = (ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex justifyContent="center" alignItems="top">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

export default NightMode;
