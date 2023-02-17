import {
  Card,
  CardBody,
  Text,
  Image,
  Icon,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

type ProductProps = {
  id: number;
  name: string;
  qty: string,
  price: number,
  imageUrl: string;
};

const TrendingCard: React.FC<ProductProps> = ({id, name, qty, price, imageUrl}) => {
  const navigate = useNavigate();
  return (
    <>
     
        <Card
          onClick={() => navigate(`/productdetail?id=${id}`)}
          maxW="sm"
          _hover={{
            shadow:
              "0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 5px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardBody>
            <Link to={"/shoppingcart"}>
              <Icon
                className="shopicon"
                as={MdShoppingCart}
                boxSize={6}
                _hover={{ textColor: "gray.600" }}
                margin={"2"}
              />
            </Link>
            <Image
              src={imageUrl}
              alt={name}
              fallbackSrc="logo.png"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="1">
              <Text color="gray.700" fontSize="xl">
                ${price}
              </Text>
              <Text fontSize={"sm"}>
                {name}
              </Text>
              <Text fontSize={"sm"}>Stock {qty}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
    </>
  );
};

export default TrendingCard;
