import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts } from "../../features/products/productSlice";

const Products = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.price}</p>
            <p className="text-sm text-gray-500">
              Stock: {product.stock} | Sold: {product.sold}
            </p>
            <Link
              to={`/dashboard/products/${product.id}`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
