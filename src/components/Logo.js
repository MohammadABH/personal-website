import React from "react";
import { Avatar, Fade, Link, Tooltip } from "@chakra-ui/react";

import avatar from "../images/avatar.jpg";

const Logo = ({ size = "xl" }) => {
  return (
    <Fade in={true}>
      <Tooltip label="LinkedIn" hasArrow arrowSize={15}>
        <Link
          href="https://www.linkedin.com/in/mohammad-albinhassan/"
          isExternal
        >
          <Avatar src={avatar} size={size} />
        </Link>
      </Tooltip>
    </Fade>
  );
};

export default Logo;
