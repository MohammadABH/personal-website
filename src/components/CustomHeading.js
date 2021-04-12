import React from "react";
import { Center, Heading } from "@chakra-ui/react";

const CustomHeading = ({ title }) => {
  return (
    <Center>
      <Heading
        as="h1"
        size="xl"
        fontWeight="medium"
        borderBottom="1px"
        padding="2%"
      >
        {title}
      </Heading>
    </Center>
  );
};

export default CustomHeading;
