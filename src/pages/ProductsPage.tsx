import { Link } from "react-router";
import { products, toSlug } from "../api/products";

const ProductsPage = () => {
  return (
    <div className="p-10 min-h-screen">
      <h1>Ini adalah Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${toSlug(product.name)}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
