import React from "react";
import { Fade } from "@chakra-ui/transition";

import InfoBox from "./InfoBox";

const InfoList = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <Fade in={true}>
          <InfoBox key={index} data={el} />
        </Fade>
      ))}
    </>
  );
};

export default InfoList;
