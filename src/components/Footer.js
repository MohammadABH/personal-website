import React from "react";
import { Box, Center, HStack, Link, Tooltip } from "@chakra-ui/react";
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
          href="https://github.com/MohammadABH/"
          isExternal
        >
              <AiFillGithub fontSize="150%" />
            </Link>
          </Tooltip>

          <Tooltip label="LinkedIn" hasArrow arrowSize={15}>
					<Link
          href="https://www.linkedin.com/in/mohammad-albinhassan/"
          isExternal
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
