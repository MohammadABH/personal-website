import React from "react";
import { Center, Container, Heading, Text } from "@chakra-ui/react";

import TechnologiesTabs from "../components/TechnologiesTabs";

const Technologies = () => {
  return (
    <Container>
      <Center>
        <Heading
          as="h1"
          size="2xl"
          fontWeight="medium"
          mb={4}
          borderBottom="1px"
          padding="5%"
        >
          Technologies
        </Heading>
      </Center>

      <Text fontSize="xl" textAlign="center" mt={4}>
        Below is the list of technologies I have worked with in the past
      </Text>

      <Container mt={8}>
        <TechnologiesTabs />
      </Container>
    </Container>
  );
};

export default Technologies;
