import { useSelector } from 'react-redux';
import ProductPerformanceChart from "../../components/charts/ProductPerformanceChart";
import SalesDonutChart from "../../components/charts/SalesDonutChart";

export default function Overview() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.firstName} {user?.lastName}</h1>
      <ProductPerformanceChart />
      <SalesDonutChart />
    </div>
  );
}
