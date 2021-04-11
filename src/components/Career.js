import React from "react";
import { Heading } from "@chakra-ui/react";
import { ImBooks } from "react-icons/all";

const Career = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4}>
        Career <ImBooks  style={{display: "inline"}} />
      </Heading>
    </>
  );
};

export default Career;
