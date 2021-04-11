import React from "react";

import InfoBox from "./InfoBox";

const InfoList = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <InfoBox key={index} data={el} />
      ))}
    </>
  );
};

export default InfoList;
