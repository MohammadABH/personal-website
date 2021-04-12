import React from "react";
import { Link } from "react-router-dom";
import { Box, Center, HStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/all";

const Footer = () => {
  return (
    <Center >
      <HStack
        as="footer"
        isInline
        p={4}
        maxW={800}
        mx="auto"
        alignContent="center"
        position="absolute"
        textAlign="center"
      >
        <Box>©️ {new Date().getFullYear()} Mohammad ABH</Box>

        <HStack>
          <Link
            to={{ pathname: "https://github.com/MohammadABH/" }}
            target="_blank"
          >
            <AiFillGithub fontSize="150%" />
          </Link>

          <Link
            to={{
              pathname: "https://www.linkedin.com/in/mohammad-albinhassan/",
            }}
            target="_blank"
          >
            <AiFillLinkedin fontSize="150%" />
          </Link>
        </HStack>
      </HStack>
    </Center>
  );
};

export default Footer;
