import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { AiFillApi, AiFillCloud, BsListOl, FiMonitor, RiCpuLine } from "react-icons/all";

const TechnologiesTabs = () => {
  return (
    <Tabs variant="soft-rounded" align="center">
      <TabList>
        <Tab>
          <BsListOl style={{ width: "auto", paddingRight: "10%" }} /> All
        </Tab>{" "}
        <Tab>
          <RiCpuLine style={{ width: "auto", paddingRight: "10%" }} /> Backend
        </Tab>
        <Tab>
          <FiMonitor style={{ width: "auto", paddingRight: "10%" }} /> Web Development
        </Tab>
        <Tab>
          <AiFillCloud style={{ width: "auto", paddingRight: "10%" }} /> DevOps
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TechnologiesTabs;
