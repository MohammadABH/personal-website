import React from "react";
import { Fade, SimpleGrid } from "@chakra-ui/react";

import technologies from "../data/technologies";
import TechnologyBox from "./TechnologyBox";

interface Props {
  type?: string;
}

const TechnologyList = ({ type }: Props) => {
  return (
    <SimpleGrid mt={4} mb={10} columns={2} spacing={10} w="auto">
      {technologies
        .filter((el) => !type || (type && type === el.type))
        .map((el, index) => {
          return (
            <Fade in={true} key={index}>
              <TechnologyBox key={index} techItem={el} />
            </Fade>
          );
        })}
    </SimpleGrid>
  );
};

export default TechnologyList;
