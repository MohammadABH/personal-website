import React from "react";
import { GiThorHammer } from "react-icons/all";

import CustomSubTitle from "./CustomSubTitle";
import InfoList from "./InfoList";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <CustomSubTitle
        text="Projects and Activities"
        icon={<GiThorHammer style={{ display: "inline" }} />}
      />
      <InfoList data={projects} />
    </>
  );
};

export default Projects;
