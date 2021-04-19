import React, { useState } from "react";

import Logo from "./Logo";
import NavbarContainer from "./NavbarContainer";
import NavbarLinks from "./NavbarLinks";
import NavbarToggle from "./NavbarToggle";
import ColourModeToggle from "./ColourModeToggle";

interface Props {}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo />
      <NavbarToggle toggle={toggle} isOpen={isOpen} />
      <NavbarLinks isOpen={isOpen}>
        <ColourModeToggle />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
