import React from "react";
import TextLoop from "react-text-loop";
import { Avatar, Badge, Box, Fade, Flex, Text } from "@chakra-ui/react";

const UserCard = ({ avatar, badge, text, name }) => {
  return (
    <Fade in={true}>
      <Flex borderWidth="1px" borderRadius="12px" padding={4} m={4}>
        <Avatar src={avatar} />
        <Box ml="3">
          <Text fontWeight="bold">
            {name}
            <Badge ml="1" colorScheme="green">
              {badge}
            </Badge>
          </Text>
          <Flex width="auto" fontSize="sm" textAlign="center">
            <TextLoop>
              {text.map((el, index) => (
                <span key={index}>{el}</span>
              ))}
            </TextLoop>
          </Flex>
        </Box>
      </Flex>
    </Fade>
  );
};

export default UserCard;
