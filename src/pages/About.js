import React from "react";
import { Container } from "@chakra-ui/react";

import Career from "../components/Career";
import CustomHeading from "../components/CustomHeading";
import Education from "../components/Education";

const About = () => {
  return (
    <>
      <CustomHeading title={"About Me"} />
      <Container maxW="container.xl" mb={20}>
        <Education />
        <Career />
      </Container>
    </>
  );
};

export default About;
