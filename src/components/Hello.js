import React, { useState } from "react";
import { Box, Center, Fade } from "@chakra-ui/react";
import TextLoop from "react-text-loop";
import { useMediaQuery } from "react-responsive";

import CustomHeading from "./CustomHeading";
import Welcome from "./Welcome";
import AnimatedText from "./AnimatedText";

const Hello = () => {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  const bigScreenText = [
    "a Computer Science student at KCL",
    "a programmer",
    "a genius?",
    "a prodigy?",
    "ok a meh dude",
  ];
  const mobileText = [
    "a Computer Science student at KCL",
    "a Full-Stack Engineer",
    "a Backend Engineer",
  ];

  const text = isMobile ? mobileText : bigScreenText;
  return (
    <Fade in={true}>
      <Center>
        <Box width="auto">
          <CustomHeading title="Hello World👋🌍" />
          <Box width="auto" p={4} mt={4} fontSize="3xl" textAlign="center">
            My name is Mohammad, I'm <AnimatedText text={text} /> based in
            London, UK
          </Box>
          <Welcome />
        </Box>
      </Center>
    </Fade>
  );
};

export default Hello;
