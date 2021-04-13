import React, { useState } from "react";
import { Center, Box, Text } from "@chakra-ui/react";
import TextLoop from "react-text-loop";

import CustomHeading from "./CustomHeading";

const Hello = () => {
  return (
    <Center>
      <Box>
        <CustomHeading title="Welcome!" />
        <Box width="100%" mt={4}>
          <Text fontSize="3xl" textAlign="center">
            My name is Mohammad, I'm{" "}
            <TextLoop>
              <span>a Computer Science student at KCL</span>
              <span>a programmer</span>
              <span>a genius?</span>
              <span>a prodigy?</span>
              <span>ok a meh dude</span>
            </TextLoop>{" "}
            based in London, UK
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default Hello;
