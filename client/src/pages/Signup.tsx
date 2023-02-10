import {
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import { useForm } from "react-hook-form";
import Head from "../components/Head";

const Signup = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const user = React.useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Head title={"SignUp"} />
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
              <FormControl
                isInvalid={
                  errors.name ||
                  errors.email ||
                  errors.password ||
                  errors.confirmPassword
                    ? true
                    : false
                }
                as={"form"}
                id={"register"}
                onSubmit={handleSubmit((e) => {
                  console.log(e);
                })}
              >
                <Flex flexDir={"column"} gap={3} p={10} align={"center"}>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Name: </FormLabel>
                    <Input
                      isInvalid={errors.name ? true : false}
                      type={"text"}
                      required
                      {...register("name", {
                        pattern: /^[a-zA-Z ]+$/,
                      })}
                      id="name"
                    />
                    {errors && errors.name ? (
                      <FormErrorMessage>Invalid name</FormErrorMessage>
                    ) : (
                      <FormHelperText>Enter a valid name</FormHelperText>
                    )}
                  </Flex>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Email: </FormLabel>
                    <Input
                      // data-invalid={errors.email}
                      isInvalid={errors.email ? true : false}
                      {...register("email", {
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      })}
                      id={"email"}
                    />
                    {errors.email ? (
                      <FormErrorMessage>Invalid email</FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        Enter a valid email address
                      </FormHelperText>
                    )}
                  </Flex>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Password: </FormLabel>
                    <Input
                      isInvalid={errors.password ? true : false}
                      type={"password"}
                      required
                      {...register("password", {
                        pattern: /(?=.*[0-9])/,
                      })}
                      id={"password"}
                    />
                    {errors.password ? (
                      <FormErrorMessage>Invalid password</FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        Password with 8 characters and a number
                      </FormHelperText>
                    )}
                  </Flex>
                  <Flex flexDir={"column"} w={"25rem"}>
                    <FormLabel>Confirm Password: </FormLabel>
                    <Input
                      isInvalid={errors.confirm_password ? true : false}
                      type={"password"}
                      required
                      {...register("confirm_password", {
                        required: true,
                        validate: (val: string) => {
                          if (watch("password") !== val) {
                            return "Password does not match";
                          }
                        },
                      })}
                      id={"confirm_password"}
                    />
                    {errors.confirm_password ? (
                      <FormErrorMessage>
                        Password does not matched
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>Re-enter password</FormHelperText>
                    )}
                  </Flex>
                  <Button w={"25rem"} mt={3} type={"submit"}>
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
            <Flex
              w={"50%"}
              bg={colorMode === "light" ? "gray.100" : "gray.400"}
              display={{ base: "none,", lg: "block" }}
            >
              <Image
                src={
                  colorMode === "light" ? "./signup.svg" : "./signup_dark.svg"
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Signup;
