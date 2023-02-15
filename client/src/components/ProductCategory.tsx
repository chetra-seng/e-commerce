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
            w={[100, 180, 240, 280, 320]}
            h={[100*2/3, 180*2/3, 240*2/3, 280*2/3, 320*2/3]}
          opacity={".9"}
          _hover={{ opacity: "1", transition: " opacity .2s ease-in" }}
        >
          <Image
            objectFit="cover"
            w={[100, 180, 240, 280, 320]}
            h={[100*2/3, 180*2/3, 240*2/3, 280*2/3, 320*2/3]}
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={5}
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
