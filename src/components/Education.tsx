import React from "react";
import { ImBriefcase } from "react-icons/all";

import CustomSubTitle from "./CustomSubTitle";
import InfoList from "./InfoList";
import education from "../data/education";

const Education = () => {
  return (
    <>
      <CustomSubTitle
        text="Education"
        icon={<ImBriefcase style={{ display: "inline" }} />}
      />
      <InfoList data={education} />
    </>
  );
};

export default Education;
