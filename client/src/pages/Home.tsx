import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Layout from "../components/Layout";
import ProductCategory from "../components/ProductCategory";
import { UserContext } from "../contexts/UserContext";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"8xl"} pt={2} pb={10} borderBottom={"1px"} borderColor={"gray.200"}>
        <Text className="mt-10 mb-5" fontWeight={"bold"}>Product Categories</Text>
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
        <Text className="mt-10 mb-5" fontWeight={"bold"}>In Trending</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
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
