import { Container, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import Head from "../components/Head";
import Layout from "../components/Layout";
import TrendingCard from "../components/TrendingCard";
import { useSearchParams } from "react-router-dom";

const CategoryPage: React.FC = () => {

  const [params] = useSearchParams();
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/customer/view-product/by-category/${params.get("id")}?page=0&size=40`
      );
      return res.data;
    },
  });

  const renderProducts = () => {
    if (!productQuery.data) return;
    const products = productQuery.data.data.map((prod: any) => ({
      id: prod.id,
      name: prod.name,
      qty: prod.qty,
      price: prod.price,
      imageUrl: `${process.env.REACT_APP_API_URL}/resource/load-image/product/${prod.images[0]}`,
    }));

    return products.map((prod: any) => (
      <TrendingCard key={prod.id} {...prod} />
    ));
  };

  return (
    <>
      <Head title={"CategoryPage"} />
      <Layout>
        <Container maxW={"8xl"} mb={"20"}>
          <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
            {params.get("name")}
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={8}>
            {renderProducts()}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};
export default CategoryPage;
