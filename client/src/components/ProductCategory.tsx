import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";
import Head from "./Head";

const ProductCategory = () => {
  return (
    <>
      <Head title={"Home Page"} />
      <Link to={"/categorypage"}>
        <Card
          maxW="md"
          opacity={".9"}
          _hover={{ opacity: "1", transition: " opacity .2s ease-out" }}
        >
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <Text className="text" fontWeight={"bold"}>
            Hello
          </Text>
        </Card>
      </Link>
    </>
  );
};

export default ProductCategory;
