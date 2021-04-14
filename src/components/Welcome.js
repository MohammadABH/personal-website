import React from "react";
import { Alert, Box, Center, Container, Fade, Tooltip } from "@chakra-ui/react";
import { GiPartyPopper } from "react-icons/all";

const Welcome = () => {
  return (
    <Fade in={true}>
      <Container>
        <Center m={4} w="auto" textAlign="center">
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
    </Fade>
  );
};

export default Welcome;
