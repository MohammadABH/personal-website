import React from "react";
import { Text } from "@chakra-ui/react";

import CustomHeading from "../components/CustomHeading";
import TechnologiesTabs from "../components/TechnologiesTabs";

const Technologies = () => {
  return (
    <>
      <CustomHeading title={"Technologies"} />

      <Text fontSize="xl" textAlign="center" m={5}>
        Below is the list of technologies I have worked with in the past
      </Text>

      <TechnologiesTabs />
    </>
  );
};

export default Technologies;
