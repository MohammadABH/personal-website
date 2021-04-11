import React from "react";
import { Heading } from "@chakra-ui/react";
import { ImBriefcase } from "react-icons/all";

const Education = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4}>
        Education <ImBriefcase style={{ display: "inline" }} />
      </Heading>
    </>
  );
};

export default Education;
