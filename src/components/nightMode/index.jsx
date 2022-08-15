import { Button, Flex, useColorMode } from "@chakra-ui/react";

import { MdNightsStay, MdOutlineWbSunny } from "react-icons/md";

const NightMode = (ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="center" alignItems="top">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
      >
        {colorMode === "light" ? <MdNightsStay /> : <MdOutlineWbSunny />}
      </Button>
    </Flex>
  );
};

export default NightMode;
