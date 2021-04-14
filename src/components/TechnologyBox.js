import React from "react";
import {
  Box,
  LinkBox,
  LinkOverlay,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

const TechnologyBox = ({ techItem }) => {
  const { colorMode } = useColorMode();

  return (
    <Tooltip label={techItem.hover} hasArrow arrowSize={15}>
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
            width="auto"
            p={4}
          >
            {techItem.icon()}
            {techItem.name}
          </Box>
        </LinkOverlay>
      </LinkBox>
    </Tooltip>
  );
};

export default TechnologyBox;
