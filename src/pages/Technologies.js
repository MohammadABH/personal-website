import React from "react";
import { Center, Container, Heading, Text } from "@chakra-ui/react";

import TechnologiesTabs from "../components/TechnologiesTabs";

const Technologies = () => {
  return (
    <>
      <Center>
        <Heading
          as="h1"
          size="xl"
          fontWeight="medium"
          borderBottom="1px"
          padding="2%"
        >
          Technologies
        </Heading>
      </Center>

      <Text fontSize="xl" textAlign="center" m={5}>
        Below is the list of technologies I have worked with in the past
      </Text>

      <TechnologiesTabs />
    </>
  );
};

export default Technologies;
