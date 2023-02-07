import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ShopCartPage() {
  return (
    <>
      <Head title={"ShopCartPage"} />
      <Layout>
        <Container maxW={"7xl"}>
          <Box w={"xl"} marginBottom={"6"}>
            <Text className="" fontWeight={"bold"} fontSize="3xl">
              Your Cart
            </Text>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eleifend luctus placerat
              fermentum bibendum egestas at mi. Lobortis suspendisse at posuere
              nunc.
            </p>
          </Box>
        </Container>
        <Flex justify={"space-around"}>
          <Box w={"xl"}>
            <Box w={"2xl"} h="180 " marginBottom={"6"} boxShadow="base ">
              <Flex>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  h="180"
                  className="w-1/3"
                />
                <div className="p-5">
                  <h1 className="text-lg font-bold">XX.XX$</h1>
                  <p className="mt-5">PREDATOR PRECISION.3 FIRM GROUND BOOTS</p>
                  <Flex className="mt-5">
                    <div>
                      <AiOutlineMinus className="text-2xl border p-1 rounded-full " />
                    </div>
                    <div className="mx-2 font-bold">1</div>
                    <div>
                      <AiOutlinePlus className="text-2xl border  p-1 rounded-full" />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </Box>
            <Box w={"2xl"} h="180 " marginBottom={"6"} boxShadow="base">
              <Flex>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  h="180"
                  className="w-1/3"
                />
                <div className="p-5">
                  <h1 className="text-lg font-bold">XX.XX$</h1>
                  <p className="mt-5">
                    PREDATOR PRECISION.3 FIRM GROUND BOOTS{" "}
                  </p>
                  <Flex className="mt-5">
                    <div>
                      <AiOutlineMinus className="text-2xl border p-1 rounded-full " />
                    </div>
                    <div className="mx-2 font-bold">2</div>
                    <div>
                      <AiOutlinePlus className="text-2xl border  p-1 rounded-full" />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </Box>
          </Box>
          <Box w={"md"}  boxShadow="base " h="300 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">Order Summary</h1>
              <Flex justify={"space-between"} marginTop={'5'}  >
                <h1>3 Item</h1>
                <h1>XX.XX$</h1>
              </Flex>
              <Flex justify={"space-between"} marginTop={'5'}  >
                <h1>Delivery</h1>
                <h1>XX.XX$</h1>
              </Flex>
              <hr className="mt-5"/>
              <Flex justify={"space-between"} marginTop={'5'} fontWeight={"bold"} fontSize="xl" >
                <h1>Delivery</h1>
                <h1>XX.XX$</h1>
              </Flex>
              <Flex justify={'center'} >
                <Button colorScheme="gray" w={400} className="mt-5">
                  Continue Checkout
                </Button>
              </Flex>
            </div>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
