              
import { Button, Container, Divider, Flex,FormLabel,Heading,Image, Input,Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Head from "../../components/Head";

export default function UserLoginPage() {
    const { colorMode } = useColorMode();
  return (
    <>
      <Head title={"UserLogin"} />
      <Container
        minW={"6xl"}
        as={motion.div}
        transitionDuration={"200ms"}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <Flex minH={"100vh"} flexDir={"column"} justifyContent={"center"}>
          <Flex flexDir={"row"} justifyContent={"center"} align={"center"}>
            <Flex flexDir={"column"} gap={2} w={"50%"}>
              <Flex flexDir={"column"} align="center">
                <Image src="./logo.png" w={"20"} />
                <Heading>Seller Login</Heading>
              </Flex>
              <Flex justifyContent={"center"}>
                <Divider w={"25rem"} />
              </Flex>
              <form >
                <Flex flexDir={"column"} gap={3} p={10} align={"center"}>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Email: </FormLabel>
                    <Input
                      type={"email"}
                      id={"email"}
                      required
                     
                    />
                  </Flex>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Password: </FormLabel>
                    <Input
                      type={"password"}
                      id={"password"}
                      required
                      
                    />
                  </Flex>
                  <Button
                    w={"25rem"}
                    mt={3}
                    type={"submit"}
                    loadingText="Logging In"
                    
                  >
                    Log In
                  </Button>
                </Flex>
              </form>
              <Flex justifyContent={"center"}>
                <Divider w={"25rem"} />
              </Flex>
              {/* <Flex flexDir={"row"} justifyContent={"center"} gap={3}>
                <Text>Don't have an account?</Text>
                <Link to={"/"}>
                  <Text>Sign Up</Text>
                </Link>
                
              </Flex> */}
            </Flex>
            <Flex
              bg={colorMode === "light" ? "gray.100" : "gray.400"}
              w={"50%"}
              display={{ base: "none", lg: "block" }}
            >
              <Image
                src={colorMode === "light" ? "./login.svg" : "./login_dark.svg"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
