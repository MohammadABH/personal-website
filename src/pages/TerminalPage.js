import React from "react";
import { Center, Fade } from "@chakra-ui/react";
import Terminal from "terminal-in-react";

import CustomHeading from "../components/CustomHeading";

const TerminalPage = () => {
  const commands = {
    name: {
      method: (args, print, runCommand) => {
        print(`Mohammad Albinhassan`);
      },
      options: [
        {
          name: "name",
          description: "my name",
          defaultValue: "Mohammad Albinhassan",
        },
      ],
    },
    age: {
      method: (args, print, runCommand) => {
        print(`19`);
      },
      options: [
        {
          name: "age",
          description: "my age",
          defaultValue: "19",
        },
      ],
    },
    email: {
      method: (args, print, runCommand) => {
        print(`mohammad.nb@outlook.com`);
      },
      options: [
        {
          name: "email",
          description: "my email",
          defaultValue: "mohammad.nb@outlook.com",
        },
      ],
    },
    study: {
      method: (args, print, runCommand) => {
        print(`Computer Science at King's College London`);
      },
      options: [
        {
          name: "study",
          description: "what i Study",
          defaultValue: "Computer Science at King's College London",
        },
      ],
    },
  };

  return (
    <Fade in={true}>
      <CustomHeading title="Terminal" />
      <Center mt={10} mb={10}>
        <Terminal
          allowTabs={true}
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={commands}
          descriptions={{
            name: "my name",
            age: "my age",
            study: "what I study",
            email: "my email",
            alert: "alert",
            popup: "alert",
          }}
          msg={
            'Welcome to the terminal! Type "help" to see a list of all commands'
          }
        />
      </Center>
    </Fade>
  );
};

export default TerminalPage;
