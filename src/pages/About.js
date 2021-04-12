import React from "react";
import { Container } from "@chakra-ui/react";

import Career from "../components/Career";
import Certificates from "../components/Certificates";
import CustomHeading from "../components/CustomHeading";
import Education from "../components/Education";

const About = () => {
  return (
    <>
      <CustomHeading title={"About Me"} />
      <Container maxW="container.xl" mb={20}>
        <Education />
        <Career />
				<Certificates />
      </Container>
    </>
  );
};

export default About;
