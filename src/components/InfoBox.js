import React from "react";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const InfoBox = ({ data }) => {
  const { colorMode } = useColorMode();

  let markup = (
    <Box
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
      <HStack justifyContent="space-between" spacing={4}>
        <HStack p={2} m={4} w="80%">
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
                <Heading size="xl">{data.title}</Heading>
              </Box>
              <Box m={2}>
                <Heading size="md">{data.description}</Heading>
              </Box>
            </Box>
          </VStack>
        </HStack>

        <Box>
          <Heading size="sm" p={4} style={{ textAlign: "center" }}>
            {data.yearRange}
          </Heading>
        </Box>
      </HStack>
      {data.labels.map((el, index) => (
        <Badge key={index} m={2} colorScheme="green">
          {el}
        </Badge>
      ))}
    </Box>
  );

  if (data.link) {
    return (
      <Link href={data.link} isExternal>
        {markup}
      </Link>
    );
  } else {
    return markup;
  }
};

export default InfoBox;
