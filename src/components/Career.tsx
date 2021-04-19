import React from "react";
import { ImBooks } from "react-icons/all";

import CustomSubTitle from "./CustomSubTitle";
import InfoList from "./InfoList";
import career from "../data/career";

const Career = () => {
  return (
    <>
      <CustomSubTitle
        text="Career"
        icon={<ImBooks style={{ display: "inline" }} />}
      />
      <InfoList data={career} />
    </>
  );
};

export default Career;
