import React from "react";
import { Link } from "react-router-dom";
import { Box, Center, HStack, Tooltip } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/all";

const Footer = () => {
  return (
    <Center>
      <HStack
        as="footer"
        isInline
        p={4}
        maxW={800}
        mx="auto"
        mt={10}
        alignContent="center"
        position="absolute"
        textAlign="center"
      >
				<Tooltip label="Thats me" hasArrow arrowSize={15}>
        <Box>©️ {new Date().getFullYear()} Mohammad ABH</Box>
				</Tooltip>

        <HStack>
          <Tooltip label="GitHub" hasArrow arrowSize={15}>
            <Link
              to={{ pathname: "https://github.com/MohammadABH/" }}
              target="_blank"
            >
              <AiFillGithub fontSize="150%" />
            </Link>
          </Tooltip>

          <Tooltip label="LinkedIn" hasArrow arrowSize={15}>
            <Link
              to={{
                pathname: "https://www.linkedin.com/in/mohammad-albinhassan/",
              }}
              target="_blank"
            >
              <AiFillLinkedin fontSize="150%" />
            </Link>
          </Tooltip>
        </HStack>
      </HStack>
    </Center>
  );
};

export default Footer;
