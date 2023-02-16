import {
  Button,
  Container,
  Divider,
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
  name: string;
  id: number;
};
type Data = {
  token: string;
  role: string;
  user: User;
};
type ResponeM = {
  code: number;
  message: string;
};
type LoginResponse = {
  data: Data;
  response: ResponeM;
};

const Login = () => {
  const baseUrl = "http://localhost:8080/api/v1";
  const { colorMode } = useColorMode();
  const [cookie, setCookie, removeCookie] = useCookies([
    "token",
    "role",
    "user",
  ]);
  const toast = useCustomToast();
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: "login",
    mutationFn: async (credential): Promise<LoginResponse> => {
      // TO-DO: Security Vulnerability
      // Exposed unencrypted password
      const res = await axios.post(`${baseUrl}/auth/login`, credential);
      return res.data;
    },
    onSuccess: (data) => {
      setCookie("token", data.data.token, {
        path: "/",
        maxAge: 36000,
      });
      setCookie("role", data.data.role, {
        path: "/",
        maxAge: 36000,
      });
      setCookie("user", data.data.user);
      toast(data.response.message, "success");
      data.data.role === "[ROLE_SELLER]"
        ? navigate("/seller/dashboard")
        : navigate("/");
    },
  });
  const { handleSubmit, register } = useForm();

  const onSubmit = (e: any) => {
    mutate(e);
  };

  if (error) {
    toast((error as any).response.data.message, "error");
  }

  React.useEffect(() => {
    if (cookie.role === undefined) {
      removeCookie("role");
      removeCookie("token");
    }
    if (cookie.role) {
      cookie.role === "[ROLE_SELLER]"
        ? navigate("/seller/dashboard")
        : navigate("/");
    }
  }, [cookie, navigate, removeCookie]);

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
                      {...register("passwd")}
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
