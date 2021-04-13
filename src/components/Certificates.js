import React from "react";
import { FaAward } from "react-icons/all";

import CustomSubTitle from "./CustomSubTitle";
import InfoList from "./InfoList";
import certificates from "../data/certificates";

const Certificates = () => {
  return (
    <>
      <CustomSubTitle
        text="Certificates"
        icon={<FaAward style={{ display: "inline" }} />}
      />
      <InfoList data={certificates} />
    </>
  );
};

export default Certificates;
