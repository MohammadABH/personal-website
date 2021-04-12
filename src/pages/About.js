import React from "react";
import { Container } from "@chakra-ui/react";

import Career from "../components/Career";
import Education from "../components/Education";

const About = () => {
  return (
      <Container maxW="container.xl" mb={20}>
        <Education />
        <Career />
      </Container>
  );
};

export default About;
