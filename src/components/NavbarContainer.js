import React from "react";
import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      boxShadow="lg"
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
			padding="1.5%"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
