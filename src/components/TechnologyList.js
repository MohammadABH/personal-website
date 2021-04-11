import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import technologies from "../data/technologies";
import TechnologyBox from "./TechnologyBox";

const TechnologyList = ({ type }) => {
  return (
    <SimpleGrid mt={4} mb={10} columns={2} spacing={10}>
      {technologies.map((el, index) => {
				if(!type || (type && type === el.type)) return <TechnologyBox key={index} techItem={el} />
			}
      )}
    </SimpleGrid>
  );
};

export default TechnologyList;
