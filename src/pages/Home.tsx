import React from "react";
import { Container } from "@chakra-ui/react";

import Hello from "../components/Hello";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hello />
      <Container maxW="container.xl" mb={20}>
        <Projects />
      </Container>
    </>
  );
};

export default Home;
