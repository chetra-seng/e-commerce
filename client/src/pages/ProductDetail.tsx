import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import TrendingCard from "../components/TrendingCard";

export default function ProductDetail() {
  return (
    <>
      <Head title={"ProductDetail"} />
      <Layout>
        <Container maxW={"8xl"} mx="auto">
          <Flex
            p="6"
            rounded="md"
            justify={"center"}
            className="max-sm:flex-col"
          >
            <div className="max-w-3xl img mr-20">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                rounded="md"
                maxW={[350, 600]}
              />

              <Stack direction={"column"} className="min-w-max">
                <Flex direction={"row"} justify="space-between" alignItems={"center"} className="">
                  <h5 className="mt-3">XX.XX$</h5>
                  <Button colorScheme="gray" w={50}>
                    Add to Cart
                  </Button>
                </Flex>

                <Text minW={[350, 600]}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, quis?
                </Text>
              </Stack>
              <Stack direction="row" marginTop={4}>
                <Image
                  minW={50}
                  boxSize={[50, 100]}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Dan Abramov"
                  rounded="md"
                />
                <Image
                  minW={50}
                  boxSize={[50, 100]}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Dan Abramov"
                  rounded="md"
                />
                <Image
                  minW={50}
                  boxSize={[50, 100]}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Dan Abramov"
                  rounded="md"
                />
                <Image
                  minW={50}
                  boxSize={[50, 100]}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Dan Abramov"
                  rounded="md"
                />
              </Stack>
            </div>
            <div className=" ml-20">
              <div className="max-sm:hidden">
                <Text className="" fontWeight={"bold"} fontSize={["md", "3xl"]}>
                  Product Detail
                </Text>
                <h5 className="mt-3">XX.XX$</h5>
                <Text fontSize={["sm", "xl"]} className="mt-3">
                  Stock 120
                </Text>
                <Button colorScheme="gray" w={[200, 400]} className="mt-5">
                  Add to Cart
                </Button>
              </div>
              <h2 className="mt-20 text-2xl">Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eleifend luctus placerat
                fermentum bibendum egestas at mi. Lobortis suspendisse at
                posuere nunc.
              </p>
            </div>
          </Flex>
        </Container>
        <Container maxW={"4xl"}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="rounded-md mt-5"
          />
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="rounded-md mt-5"
          />
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="rounded-md mt-5"
          />
        </Container>
        <Container maxW={"8xl"} mb={"20"}>
          <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
            Similar Products
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={8}>
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
