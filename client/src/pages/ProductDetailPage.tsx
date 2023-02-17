import { useQuery } from "react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage: React.FC = () => {
  const [param] = useSearchParams();

  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/customer/view-product/${param.get("id")}`
      );
      return res.data;
    },
  });

  const renderProducts = () => {
    if (!productQuery.data) return;

    const product ={
      id:  productQuery.data.data.id,
      name:  productQuery.data.data.name,
      qty:  productQuery.data.data.qty,
      price:  productQuery.data.data.price,
      description: productQuery.data.data.description,
      images:  productQuery.data.data.images,
    }

    return (
      <ProductDetail key={product.id} {...product} />
    );
  };

  return (
    <>
      {renderProducts()}
    </>
  );
};

export default ProductDetailPage;
