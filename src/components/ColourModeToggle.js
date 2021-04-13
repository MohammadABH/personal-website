import React from "react";
import { Box, useColorMode, useToast } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColourModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleClick = () => {
    toggleColorMode();
    toast({
      title: `Switched to ${colorMode === "light" ? "Dark" : "Light"} mode`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box onClick={handleClick}>
      {colorMode === "light" ? (
        <MoonIcon fontSize="200%" />
      ) : (
        <SunIcon fontSize="200%" />
      )}
    </Box>
  );
};

export default ColourModeToggle;
