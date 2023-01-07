import {
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Signup = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const user = React.useContext(UserContext);

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container
      minW={"6xl"}
      as={motion.div}
      transitionDuration={"200ms"}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <Flex minH={"100vh"} flexDir={"column"} justifyContent={"center"}>
        <Flex
          flexDir={"row-reverse"}
          justifyContent={"center"}
          align={"center"}
        >
          <Flex flexDir={"column"} gap={2} w={"50%"}>
            <Flex flexDir={"row"} align={"center"} justifyContent={"center"}>
              <Heading>Create an Account</Heading>
            </Flex>
            <Flex justifyContent={"center"}>
              <Divider w={"25rem"} />
            </Flex>
            <FormControl>
              <Flex flexDir={"column"} gap={3} p={10} align={"center"}>
                <Flex flexDir={"column"} w={"25rem"}>
                  <FormLabel>Name: </FormLabel>
                  <Input type={"text"} required />
                </Flex>
                <Flex flexDir={"column"} w={"25rem"}>
                  <FormLabel>Email: </FormLabel>
                  <Input type={"email"} required />
                </Flex>
                <Flex flexDir={"column"} w={"25rem"}>
                  <FormLabel>Password: </FormLabel>
                  <Input type={"password"} required />
                </Flex>
                <Flex flexDir={"column"} w={"25rem"}>
                  <FormLabel>Confirm Password: </FormLabel>
                  <Input type={"password"} required />
                </Flex>
                <Button w={"25rem"} mt={3}>
                  Sign Up
                </Button>
              </Flex>
            </FormControl>
            <Flex justifyContent={"center"}>
              <Divider w={"25rem"} />
            </Flex>
            <Flex flexDir={"row"} justifyContent={"center"} gap={3}>
              <Text>Already have an account?</Text>
              <Link to={"/login"}>
                <Text>Log In</Text>
              </Link>
            </Flex>
          </Flex>
          <Flex w={"50%"} bg={colorMode === "light" ? "gray.100" : "gray.400"}>
            <Image
              src={colorMode === "light" ? "./signup.svg" : "./signup_dark.svg"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Signup;
