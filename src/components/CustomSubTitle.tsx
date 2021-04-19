import React from "react";
import { Fade, Heading } from "@chakra-ui/react";

interface Props {
  text: string;
  icon: JSX.Element;
}

const CustomSubTitle = ({ text, icon }: Props) => {
  return (
    <Fade in={true}>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
        {text} {icon}
      </Heading>
    </Fade>
  );
};

export default CustomSubTitle;
