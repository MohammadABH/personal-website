import React from "react";
import { Container } from "@chakra-ui/react";

import avatar from "../images/avatar.jpg";
import Career from "../components/Career";
import Certificates from "../components/Certificates";
import CustomHeading from "../components/CustomHeading";
import Education from "../components/Education";
import UserCard from "../components/UserCard";

const About = () => {
  const text = [
    "Computer Science student at King's College London",
    "Programmer",
    "Full-stack Engineer",
    "Backend Engineer",
  ];
  return (
    <>
      <CustomHeading title={"About Me"} />
      <Container maxW="container.xl" mb={20}>
        <UserCard
          name="Mohammad Albinhassan"
					email="mohammad.nb@outlook.com"
          badge="Owner"
          text={text}
          avatar={avatar}
        />
        <Education />
        <Career />
        <Certificates />
      </Container>
    </>
  );
};

export default About;
