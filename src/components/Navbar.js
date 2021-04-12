import React, { useState } from "react";

import Logo from "./Logo";
import NavbarContainer from "./NavbarContainer";
import NavbarLinks from "./NavbarLinks";
import NavbarToggle from "./NavbarToggle";
import ColourModeToggle from "./ColourModeToggle";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo w="100px" />
      <NavbarToggle toggle={toggle} isOpen={isOpen} />
      <NavbarLinks isOpen={isOpen}>
          <ColourModeToggle />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
