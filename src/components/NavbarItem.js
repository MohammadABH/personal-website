import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const NavbarItem = ({ children, isLast, isActive, to = "/", ...rest }) => {
  return (
    <Text
      display="block"
      as={NavLink}
			exact
			activeStyle={{
				borderBottom: "1px solid"
			}}
      to={to}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default NavbarItem;
