import React from "react";
import TextLoop from "react-text-loop";
import { Avatar, Badge, Box, Fade, Flex, Text } from "@chakra-ui/react";

interface Props {
  avatar: string;
  badge: string;
  email: string;
  text: string[];
  name: string;
}

const UserCard = ({ avatar, badge, email, text, name }: Props) => {
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
          <Text fontWeight="light" fontSize="sm">
            Email: {email}
          </Text>
        </Box>
      </Flex>
    </Fade>
  );
};

export default UserCard;
