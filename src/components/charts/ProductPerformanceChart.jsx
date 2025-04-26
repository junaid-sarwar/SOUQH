import {
    ResponsiveContainer,
    ComposedChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    Line,
    CartesianGrid,
  } from 'recharts';
  import { useSelector } from 'react-redux';
  import { selectProducts } from '../../features/products/productSlice';
  
  const ProductPerformanceChart = () => {
    const products = useSelector(selectProducts);
    
    const data = products.map((product) => ({
      month: 'Jan', // You can update this dynamically
      sold: product.sold,
      remaining: product.stock,
      profit: product.profit,
    }));
  
    return (
      <div className="bg-white p-6 rounded-xl shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Product Performance (Monthly)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sold" fill="#4f46e5" name="Units Sold" />
            <Bar dataKey="remaining" fill="#34d399" name="Remaining Stock" />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#f59e0b"
              strokeWidth={2}
              name="Profit / Loss"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default ProductPerformanceChart;
  