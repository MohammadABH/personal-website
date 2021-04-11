import React from "react";
import { Heading } from "@chakra-ui/react";
import { ImBriefcase } from "react-icons/all";

import InfoList from "./InfoList";
import education from "../data/education";


const Education = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
        Education <ImBriefcase style={{ display: "inline" }} />
      </Heading>
      <InfoList data={education} />
    </>
  );
};

export default Education;
