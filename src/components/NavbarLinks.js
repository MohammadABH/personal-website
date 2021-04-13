import React, { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/all";

import NavbarItem from "./NavbarItem";

const NavbarLinks = ({ isOpen, children }) => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

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
        <NavbarItem
          to="/"
          isActive={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        >
          Home
        </NavbarItem>
        <NavbarItem
          to="/about"
          isActive={activeItem === "about"}
          onClick={() => setActiveItem("about")}
        >
          About
        </NavbarItem>

        <NavbarItem
          to="/technologies"
          isActive={activeItem === "technologies"}
          onClick={() => setActiveItem("technologies")}
        >
          Technologies
        </NavbarItem>

        <NavbarItem
          to={{ pathname: "https://github.com/MohammadABH/" }}
          target="_blank"
        >
          <AiFillGithub fontSize="200%" />
        </NavbarItem>

        {children}
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
