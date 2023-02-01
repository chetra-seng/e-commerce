import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Layout from "../components/Layout";
import ProductCategory from "../components/ProductCategory";
import { UserContext } from "../contexts/UserContext";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"8xl"} py={2}>
        <h1>Product Categories</h1>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
          <ProductCategory />
        </Grid>
        <h1>dfsgaiufgsdiufgsiadfiusdafiasdfggif</h1>
      </Container>
    </Layout>
  );
};

export default Home;
