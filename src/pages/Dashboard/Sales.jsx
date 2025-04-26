import { useSelector } from "react-redux";
import SalesDonutChart from "../../components/charts/SalesDonutChart";
import { selectProducts } from "../../features/products/productSlice";

const Sales = () => {
  const products = useSelector(selectProducts);

  const totalSales = products.reduce((acc, product) => acc + product.sold, 0);
  const totalProfit = products.reduce((acc, product) => acc + product.profit, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Sales Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">Total Sales: {totalSales} Units</h2>
        <h2 className="text-xl font-semibold text-gray-700">Total Profit: ${totalProfit}</h2>
        <SalesDonutChart salesData={products} />
      </div>
    </div>
  );
};

export default Sales;
