import React from "react";
import { Heading } from "@chakra-ui/react";
import { GiThorHammer } from "react-icons/all";

import InfoList from "./InfoList";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <Heading fontWeight="thin" borderBottom="1px" p={4} m={4}>
        Projects and Activities <GiThorHammer style={{ display: "inline" }} />
      </Heading>
      <InfoList data={projects} />
    </>
  );
};

export default Projects;
