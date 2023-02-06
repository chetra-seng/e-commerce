import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Layout from "../components/Layout";
import ProductCategory from "../components/ProductCategory";
import { UserContext } from "../contexts/UserContext";
import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"8xl"}>
        <Flex
          boxShadow="base"
          p="6"
          rounded="md"
          alignItems={"center"}
          justify={"space-between"}
          padding={"50"}
          className='content'
        >
          <div style={{ width: "300px" }} className='content-detail'>
            <Text className="text-center" fontWeight={"bold"} fontSize="3xl">
              Healine text
            </Text>
            <Text className="text-center">
              Lorem ipsum dolor sit amet consectetur. Eleifend luctus placerat
              fermentum bibendum egestas at mi. Lobortis suspendisse at posuere
              nunc.
            </Text>
          </div>
          <div className="max-w-3xl img" >
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="rounded-md"
            />
          </div>
        </Flex>
      </Container>

      <Container maxW={"8xl"} py={2}>
        <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
          Product Categories
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
        </Grid>
      </Container>

      <Container maxW={"8xl"} mb={"20"}>
        <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
          In Trending
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
  );
};

export default Home;
