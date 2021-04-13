import React from "react";
import { Box, Tooltip, useColorMode, useToast } from "@chakra-ui/react";
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
        <Tooltip label="Dark Mode" hasArrow arrowSize={15}>
          <MoonIcon fontSize="200%" />
        </Tooltip>
      ) : (
        <Tooltip label="Light Mode" hasArrow arrowSize={15}>
          <SunIcon fontSize="200%" />
        </Tooltip>
      )}
    </Box>
  );
};

export default ColourModeToggle;
