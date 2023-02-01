import {
  Button,
  Container,
  Divider,
  extendTheme,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Head from "../components/Head";
import useCustomToast from "../hooks/useCustomToast";

type User = {
  id: number;
  name: string;
  email: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: User;
};

const Login = () => {
  const { colorMode } = useColorMode();
  const [cookie, setCookie] = useCookies(["token", "user"]);
  const toast = useCustomToast();
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: "login",
    mutationFn: async (credential): Promise<LoginResponse> => {
      // TO-DO: Security Vulnerability
      // Exposed unencrypted password
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        credential
      );
      return res.data;
    },
    onSuccess: (data) => {
      setCookie("token", data.access_token, {
        path: "/",
        maxAge: data.expires_in - 100,
      });
      setCookie("user", data.user, {
        path: "/",
        maxAge: data.expires_in - 100,
      });
      toast("Login Success", "success");
      navigate("/");
    },
  });
  const { handleSubmit, register } = useForm();

  const onSubmit = (e: any) => {
    mutate(e);
  };

  if (error) {
    toast((error as any).response.data.error, "error");
  }

  React.useEffect(() => {
    if (cookie.user) {
      navigate("/");
    }
  }, [cookie, navigate]);

  return (
    <>
      <Head title={"Login"} />
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
                <Heading>welcome back</Heading>
              </Flex>
              <Flex justifyContent={"center"}>
                <Divider w={"25rem"} />
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDir={"column"} gap={3} p={10} align={"center"}>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Email: </FormLabel>
                    <Input
                      type={"email"}
                      id={"email"}
                      required
                      {...register("email")}
                    />
                  </Flex>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Password: </FormLabel>
                    <Input
                      type={"password"}
                      id={"password"}
                      required
                      {...register("password")}
                    />
                  </Flex>
                  <Button
                    w={"25rem"}
                    mt={3}
                    type={"submit"}
                    loadingText="Logging In"
                    isLoading={isLoading}
                  >
                    Log In
                  </Button>
                </Flex>
              </form>
              <Flex justifyContent={"center"}>
                <Divider w={"25rem"} />
              </Flex>
              <Flex flexDir={"row"} justifyContent={"center"} gap={3}>
                <Text>Don't have an account?</Text>
                <Link to={"/signup"}>
                  <Text>Sign Up</Text>
                </Link>
              </Flex>
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
};

export default Login;
