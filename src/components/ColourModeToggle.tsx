import React from "react";
import useSound from "use-sound";
import { Box, Tooltip, useColorMode, useToast } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const click = require("../sounds/click.mp3");

const ColourModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const [play] = useSound(click, {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toast.closeAll();
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
