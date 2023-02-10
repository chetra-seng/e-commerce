import { Container, Grid ,Text} from "@chakra-ui/react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import TrendingCard from "../components/TrendingCard";

export default function CategoryPage() {
  return (
    <>
      <Head title={"CategoryPage"} />
      <Layout>
        <Container maxW={"8xl"} mb={"20"}>
          <Text className="mt-10 mb-5" fontWeight={"bold"} fontSize="3xl">
            Category A
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
