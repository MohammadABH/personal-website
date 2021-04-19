import React from "react";
import { Center, Heading, Fade } from "@chakra-ui/react";

interface Props {
  title: string;
}

const CustomHeading = ({ title }: Props) => {
  return (
    <Fade in={true}>
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
    </Fade>
  );
};

export default CustomHeading;
