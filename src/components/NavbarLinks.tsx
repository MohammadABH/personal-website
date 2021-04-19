import React from "react";
import { Box, Stack, Link, Tooltip } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/all";

import NavbarItem from "./NavbarItem";

interface Props {
	isOpen: boolean;
	children?: React.ReactNode;
}

const NavbarLinks = ({ isOpen, children }: Props) => {
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

        <Tooltip label="GitHub" hasArrow arrowSize={15}>
          <Box>
            <Link href="https://github.com/MohammadABH/" isExternal>
              <AiFillGithub fontSize="200%" />
            </Link>
          </Box>
        </Tooltip>

        {children}
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
