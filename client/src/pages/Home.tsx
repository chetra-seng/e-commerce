import React from "react";
import Layout from "../components/Layout";
import ProductCategory from "../components/ProductCategory";
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import TrendingCard from "../components/TrendingCard";
import { useQuery } from "react-query";
import axios from "axios";

const Home: React.FC = () => {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/customer/view-product`
      );
      return res.data;
    },
    retry: 2,
  });

  const renderProducts = () => {
    if (!productQuery.data) return;
    const products = productQuery.data.data.map((prod: any) => ({
      id: prod.id,
      name: prod.name,
      qty: prod.qtu,
      price: prod.price,
      imageUrl: prod.images
        ? `${process.env.REACT_APP_API_URL}/resource/load-image/product/${prod.images[0]}`
        : "logo.png",
    }));

    return products.map((prod: any) => (
      <TrendingCard key={prod.id} {...prod} />
    ));
  };

  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/customer/category/dropdown?page=0&size=6`
      );
      return res.data;
    },
    retry: 2,
  });

  const renderCategory = () => {
    if (!categoryQuery.data) return;
    const categories =
      categoryQuery.data instanceof Object
        ? categoryQuery.data.data.map((cate: any) => ({
            id: cate.id,
            name: cate.name,
            imageUrl: cate.imageFileName
              ? `${process.env.REACT_APP_API_URL}/resource/load-image/category/${cate.imageFileName}`
              : "",
          }))
        : categoryQuery.data.map((cate: any) => ({
            id: cate.id,
            name: cate.name,
            imageUrl: cate.imageFileName
              ? `${process.env.REACT_APP_API_URL}/resource/load-image/category/${cate.imageFileName}`
              : "",
          }));

    return categories.map((cate: any) => (
      <ProductCategory key={cate.id} {...cate} />
    ));
  };

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
          className="content"
        >
          <div style={{ width: "300px" }} className="content-detail">
            <Text className="text-center" fontWeight={"bold"} fontSize="3xl">
              WHAT EVER YOU WANT TO SAY...
            </Text>
            <Text className="text-center">
              Lorem ipsum dolor sit amet consectetur. Eleifend luctus placerat
              fermentum bibendum egestas at mi. Lobortis suspendisse at posuere
              nunc.
            </Text>
          </div>
          <div className="max-w-3xl img">
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
          {renderCategory()}
        </Grid>
      </Container>

      <Container maxW={"8xl"} mb={"20"}>
        <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
          In Trending
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          {renderProducts()}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
function typeOf(data: any) {
  throw new Error("Function not implemented.");
}
