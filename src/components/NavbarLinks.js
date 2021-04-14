import React from "react";
import { Box, Stack, Tooltip } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/all";

import NavbarItem from "./NavbarItem";

const NavbarLinks = ({ isOpen, children }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavbarItem to="/">Home</NavbarItem>

        <NavbarItem to="/about">About</NavbarItem>

        <NavbarItem to="/technologies">Technologies</NavbarItem>

        <NavbarItem to="/terminal">Terminal</NavbarItem>

        <NavbarItem
          to={{ pathname: "https://github.com/MohammadABH/" }}
          target="_blank"
        >
          <Tooltip label="GitHub" hasArrow arrowSize={15}>
            <Box>
              <AiFillGithub fontSize="200%" />
            </Box>
          </Tooltip>
        </NavbarItem>

        {children}
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
