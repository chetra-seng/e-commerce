import { Container, Flex, Text } from "@chakra-ui/react";
import Head from "../components/Head";
import Layout from "../components/Layout";

export default function ProductDetail() {
    return (
        <>
            <Head title={"ProductDetail"} />
            <Layout>
                <Container maxW={"8xl"}>
                    <Flex
                        p="6"
                        rounded="md"
                        justify={"space-between"}
                        className='content'
                    >
                        <div className="max-w-2xl img" >
                            <img
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                                className="rounded-md"
                            />
                        </div>
                        <div style={{ width: "300px" }} className='content-detail'>
                            <Text className="text-center" fontWeight={"bold"} fontSize="3xl">
                               Product Detail
                            </Text>
                            <Text className="text-center">
                                Lorem ipsum dolor sit amet consectetur. Eleifend luctus placerat
                                fermentum bibendum egestas at mi. Lobortis suspendisse at posuere
                                nunc.
                            </Text>
                        </div>
                    </Flex>
                </Container>


            </Layout>
        </>
    )
}