import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../features/products/productSlice";
import ProductPerformanceChart from "../../components/charts/ProductPerformanceChart";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.price}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
        <p className="text-sm text-gray-500">Sold: {product.sold}</p>
        <p className="text-sm text-gray-500">Profit: ${product.profit}</p>

        <ProductPerformanceChart productId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetails;
