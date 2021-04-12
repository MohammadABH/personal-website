import React from "react";
import { Heading } from "@chakra-ui/react";
import { FaAward } from "react-icons/all";

import InfoList from "./InfoList";
import certificates from "../data/certificates";


const Certificates = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
				Certificates <FaAward style={{ display: "inline" }} />
      </Heading>
      <InfoList data={certificates} />
    </>
  );
};

export default Certificates;
