import React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
	children?: React.ReactNode;
}

const NavbarContainer = ({ children, ...rest }: Props) => {
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
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
