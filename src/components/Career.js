import React from "react";
import { Heading } from "@chakra-ui/react";
import { ImBooks } from "react-icons/all";

import InfoList from "./InfoList";
import career from "../data/career";


const Career = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
        Career <ImBooks style={{ display: "inline" }} />
      </Heading>
      <InfoList data={career} />
    </>
  );
};

export default Career;
