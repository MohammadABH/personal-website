import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColourModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon fontSize="200%" /> : <SunIcon fontSize="200%" />}
    </Box>
  );
};

export default ColourModeToggle;
