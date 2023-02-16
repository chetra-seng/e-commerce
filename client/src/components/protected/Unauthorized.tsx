import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Unauthorized() {
  return (
    <Flex
      min-w="max"
      h="100vh"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text fontSize={30}>Unauthorized Access</Text>
    </Flex>
  );
}
