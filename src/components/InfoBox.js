import React from "react";
import {
  Center,
  Badge,
  Box,
  Heading,
  Stack,
  Image,
  Link,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const InfoBox = ({ data }) => {
  const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ maxWidth: 750 });
  let markup = (
    <Box
      p={5}
      mb={4}
      shadow="md"
      w="100%"
      borderWidth="1px"
      borderRadius="md"
      backgroundColor={colorMode === "light" ? "white" : "gray.900"}
      overflow="hidden"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
    >
      <Stack
        justifyContent="space-between"
        spacing={4}
        direction={isMobile ? "column" : "row"}
      >
        <Stack
          Stack
          direction={isMobile ? "column" : "row"}
          p={2}
          m={4}
          w="auto"
          alignItems="center"
        >
          <Image
            src={data.image}
            borderRadius="10%"
            width="10%"
            inlineSize="20"
            m={4}
          />
          <VStack spacing={4}>
            <Box>
              <Box m={2}>
                <Heading size="xl" textAlign={isMobile ? "center" : "left"}>
                  {data.title}
                </Heading>
              </Box>
              <Box m={2}>
                <Heading size="md" textAlign={isMobile ? "center" : "left"}>
                  {data.description}
                </Heading>
              </Box>
            </Box>
          </VStack>
        </Stack>

        <Center>
          <Heading size="sm" p={4} whiteSpace="nowrap" overflow="hidden">
            {data.yearRange}
          </Heading>
        </Center>
      </Stack>
      {data.labels.map((el, index) => (
        <Badge key={index} m={2} colorScheme="green">
          {el}
        </Badge>
      ))}
    </Box>
  );

  if (data.link) {
    return (
      <Link href={data.link} style={{ textDecoration: "none" }} isExternal>
        {markup}
      </Link>
    );
  } else {
    return markup;
  }
};

export default InfoBox;
