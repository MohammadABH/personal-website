import React from "react";
import { Link, Image } from "@chakra-ui/react";

import avatar from "../images/avatar.jpg";

const Logo = () => {
  return (
    <Link href="https://www.linkedin.com/in/mohammad-albinhassan/" isExternal>
      <Image src={avatar} borderRadius="50%" inlineSize="20" />
    </Link>
  );
};

export default Logo;
