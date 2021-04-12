import React from "react";
import { Center, Container, Heading } from "@chakra-ui/react";

import Career from "../components/Career";
import Education from "../components/Education";

const About = () => {
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
          About Me
        </Heading>
      </Center>
      <Container maxW="container.xl" mb={20}>
        <Education />
        <Career />
      </Container>
    </>
  );
};

export default About;
