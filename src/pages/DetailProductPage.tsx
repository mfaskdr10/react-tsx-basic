import { useParams } from "react-router";
import { products, toSlug } from "../api/products";

const DetailProductPage = () => {
  const params = useParams<{ slug: string }>();

  const product = products.find((p) => toSlug(p.name) === params.slug);
  if (!product) return <h2 className="p-4 text-red-500">Product not found</h2>;

  return (
    <div className="p-10">
      <h1>Product Detail</h1>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
    </div>
  );
};

export default DetailProductPage;
