import React from "react";
import { Alert, Box, Center, Fade, Text } from "@chakra-ui/react";
import { GiPartyPopper } from "react-icons/all";
import TextLoop from "react-text-loop";

import CustomHeading from "./CustomHeading";

const Hello = () => {
  return (
    <Fade in={true}>
      <Center>
        <Box width="100%">
          <CustomHeading title="Hello World👋🌍" />
          <Box width="100%" mt={4} fontSize="3xl" textAlign="center">
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
          <Center m={4}>
            <Alert m={4} w="50%" status="success" variant="left-accent">
              <Box mr={4}>
                <GiPartyPopper />
              </Box>
              Welcome to my personal website, have a look around!
            </Alert>
          </Center>
        </Box>
      </Center>
    </Fade>
  );
};

export default Hello;
