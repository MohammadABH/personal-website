import React, { useState } from "react";
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/all";

import NavbarItem from "./NavbarItem";
import ColourModeToggle from "./ColourModeToggle";

const NavbarLinks = ({ isOpen }) => {
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

        <Menu>
          <MenuButton
            as={Button}
            variant="blank"
            padding="0%"
            fontWeight="normal"
            rightIcon={<ChevronDownIcon />}
          >
            Other
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => setActiveItem("technologies")}
              as={Link}
              to="/technologies"
            >
              Tech Stack
            </MenuItem>
            <MenuItem
              onClick={() => setActiveItem("history")}
              as={Link}
              to="/history"
            >
              History{" "}
            </MenuItem>
          </MenuList>
        </Menu>

        <NavbarItem
          to={{ pathname: "https://github.com/MohammadABH/" }}
          target="_blank"
        >
          <AiFillGithub fontSize="200%" />
        </NavbarItem>
        <NavbarItem>
          <ColourModeToggle />
        </NavbarItem>
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
