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
import Head from "./Head";

const ProductCategory = () => {
  return (
    <Card maxW="md" borderTopRadius={"md"} borderBottomRadius={"md"}>
      <Image
        borderTopRadius={"md"}
        borderBottomRadius={"md"}
        objectFit="cover"
        src="https://marvel-b1-cdn.bc0a.com/f00000000178855/florsheim.com.au/shop/resources/images/index/SS22-FLAU-Desktop-HomepageRefresh-Container2-min.jpg"
        alt="Chakra UI"
      />
      <Text className="text" fontWeight={"bold"}>
        Men Shoes
      </Text>
    </Card>
  );
};

export default ProductCategory;
