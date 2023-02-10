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
  Icon,
  Stack,
  Divider,
  ButtonGroup,
  background,
} from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingCard = () => {
  return (
    <>
      <Link to={"/productdetail"}>
        <Card
          maxW="sm"
          _hover={{
            shadow:
              "0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 5px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardBody>
            <Link to={"/login"}>
              <Icon
                className="shopicon"
                as={MdShoppingCart}
                boxSize={6}
                _hover={{ textColor: "gray.600" }}
                margin={'2'}
              />
            </Link>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="1">
              <Text color="gray.700" fontSize="xl">
                $450
              </Text>
              <Text fontSize={"sm"}>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces,
              </Text>
              <Text fontSize={"sm"}>Stock 120</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Link>
    </>
  );
};

export default TrendingCard;
