import React from "react";
import { Fade } from "@chakra-ui/transition";

import InfoBox from "./InfoBox";

interface DataInterface {
  title: string;
  description: string;
  image: string;
  yearRange: string;
  labels: string[];
  link?: string;
}

interface Props {
  data: DataInterface[];
}

const InfoList = ({ data }: Props) => {
  return (
    <>
      {data.map((el, index) => (
        <Fade in={true} key={index}>
          <InfoBox key={index} data={el} />
        </Fade>
      ))}
    </>
  );
};

export default InfoList;
