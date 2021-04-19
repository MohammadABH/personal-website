import React from "react";
import { Avatar, Fade, Link, Tooltip } from "@chakra-ui/react";

import avatar from "../images/avatar.jpg";

interface Props {
  size?: string;
}

const Logo = ({ size = "xl" }: Props) => {
  return (
    <Tooltip label="LinkedIn" hasArrow arrowSize={15}>
      <Fade in={true}>
        <Link
          href="https://www.linkedin.com/in/mohammad-albinhassan/"
          isExternal
        >
          <Avatar src={avatar} size={size} />
        </Link>
      </Fade>
    </Tooltip>
  );
};

export default Logo;
