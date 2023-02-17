import { Card, Box, Text, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";

type ProductCategoryProps = {
  id: number;
  name: string;
  imageUrl: string;
};

const ProductCategory: React.FC<ProductCategoryProps> = ({
  id,
  name,
  imageUrl,
}) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Head title={name} />
     
        <Card as="a" onClick={() => navigate(`/category/?id=${id}&name=${name}`)}
          w={[100, 180, 240, 280, 320]}
          h={[
            (100 * 2) / 3,
            (180 * 2) / 3,
            (240 * 2) / 3,
            (280 * 2) / 3,
            (320 * 2) / 3,
          ]}
          opacity={".9"}
          _hover={{ opacity: "1", transition: " opacity .2s ease-in" }}
        >
          <Image
            objectFit="cover"
            w={[100, 180, 240, 280, 320]}
            h={[
              (100 * 2) / 3,
              (180 * 2) / 3,
              (240 * 2) / 3,
              (280 * 2) / 3,
              (320 * 2) / 3,
            ]}
            src={imageUrl ? imageUrl : "logo.png"}
            alt={name}
            fallbackSrc={"logo.png"}
            borderRadius={5}
          />
          <Text className="text" fontWeight={"bold"}>
            {name}
          </Text>
        </Card>
    </Box>
  );
};

export default ProductCategory;
