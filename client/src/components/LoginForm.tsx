import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <Container minW={"xl"}>
      <Flex minH={"100vh"} align={"center"}>
        <Flex
          flexDir={"column"}
          gap={3}
          align={"center"}
          p={10}
          border={"1px"}
          borderRadius={"2xl"}
        >
          <FormControl>
            <Flex flexDir={"column"} w={"25rem"}>
              <FormLabel>Email: </FormLabel>
              <Input type={"email"} required />
            </Flex>
            <Flex flexDir={"column"} w={"25rem"}>
              <FormLabel>Password: </FormLabel>
              <Input type={"password"} required />
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Container>
  );
};

export default LoginForm;
