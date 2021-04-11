import React from "react";
import { Box, LinkBox, LinkOverlay, useColorMode } from "@chakra-ui/react";

const TechnologyBox = ({ techItem }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <LinkBox
      _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
    >
      <LinkOverlay href={techItem.url} textDecoration="none" isExternal>
        <Box
          backgroundColor={colorMode === "light" ? "white" : "gray.900"}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="110%"
					p={4}
        >
          {techItem.icon()}
          {techItem.name}
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};

export default TechnologyBox;
