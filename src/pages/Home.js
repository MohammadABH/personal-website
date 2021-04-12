import React from "react";
import { Container } from "@chakra-ui/react";

import CustomHeading from "../components/CustomHeading";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <CustomHeading title={"Home Page"} />
      <Container maxW="container.xl" mb={20}>
        <Projects />
      </Container>
    </>
  );
};

export default Home;
