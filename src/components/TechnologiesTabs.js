import React from "react";
import {
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { AiFillCloud, BsListOl, FiMonitor, RiCpuLine } from "react-icons/all";

import TechnologyList from "./TechnologyList";

const TechnologiesTabs = () => {
  return (
    <Tabs variant="soft-rounded" align="center">
      <TabList>
        <Tab _selected={{ color: "white", bg: "green.500" }}>
          <BsListOl style={{ width: "auto", paddingRight: "10%" }} /> All
        </Tab>
        <Tab _selected={{ color: "white", bg: "gray.500" }}>
          <RiCpuLine style={{ width: "auto", paddingRight: "10%" }} /> Backend
        </Tab>
        <Tab _selected={{ color: "white", bg: "purple.500" }}>
          <FiMonitor style={{ width: "auto", paddingRight: "10%" }} /> Web
          Development
        </Tab>
        <Tab _selected={{ color: "white", bg: "red.500" }}>
          <AiFillCloud style={{ width: "auto", paddingRight: "10%" }} /> DevOps
        </Tab>
      </TabList>
      <Container>
        <TabPanels>
          <TabPanel>
            <TechnologyList />
          </TabPanel>
          <TabPanel>
            <TechnologyList type="backend" />
          </TabPanel>
          <TabPanel>
            <TechnologyList type="web" />
          </TabPanel>
          <TabPanel>
            <TechnologyList type="devops" />
          </TabPanel>
        </TabPanels>
      </Container>
    </Tabs>
  );
};

export default TechnologiesTabs;
