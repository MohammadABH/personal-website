import React from "react";
import { Fade, Heading } from "@chakra-ui/react";

const CustomSubTitle = ({ text, icon }) => {
  return (
    <Fade in={true}>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
        {text} {icon}
      </Heading>
    </Fade>
  );
};

export default CustomSubTitle;
