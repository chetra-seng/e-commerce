import { Helmet } from "react-helmet";

export default function Head({ title }: any) {
  return (
    <Helmet>
      <title>{title} | Cool-Ecommerce</title>
    </Helmet>
  );
}
