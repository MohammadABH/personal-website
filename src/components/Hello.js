import React from "react";
import { Alert, Box, Center, Container, Fade, Tooltip } from "@chakra-ui/react";
import { GiPartyPopper } from "react-icons/all";
import TextLoop from "react-text-loop";

import CustomHeading from "./CustomHeading";

const Hello = () => {
  return (
    <Fade in={true}>
      <Center>
        <Box width="100%">
          <CustomHeading title="Hello World👋🌍" />
          <Box width="100%" p={4} mt={4} fontSize="3xl" textAlign="center">
            My name is Mohammad, I'm{" "}
            <TextLoop>
              <span>a Computer Science student at KCL</span>
              <span>a programmer</span>
              <span>a genius?</span>
              <span>a prodigy?</span>
              <span>ok a meh dude</span>
            </TextLoop>{" "}
            based in London, UK
          </Box>
          <Container>
            <Center m={4} w="100%" textAlign="center">
              <Alert m={4} status="success" variant="left-accent">
                <Tooltip label="Hooray!" hasArrow arrowSize={15}>
                  <Box mr={4}>
                    <GiPartyPopper />
                  </Box>
                </Tooltip>
                Welcome to my personal website, have a look around! <br />
                Email me: mohammad.nb@outlook.com
              </Alert>
            </Center>
          </Container>
        </Box>
      </Center>
    </Fade>
  );
};

export default Hello;
