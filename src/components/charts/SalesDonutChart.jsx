import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
  } from 'recharts';
  import { useSelector } from 'react-redux';
  import { selectProducts } from '../../features/products/productSlice';
  
  const SalesDonutChart = () => {
    const products = useSelector(selectProducts);
  
    // Sample data for the donut chart (could represent product categories or total sales)
    const data = products.map((product) => ({
      name: product.name,
      value: product.sold, // You can modify to show the value you prefer
    }));
  
    const COLORS = ['#4f46e5', '#34d399', '#f59e0b'];
  
    return (
      <div className="bg-white p-6 rounded-xl shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Sales Distribution</h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default SalesDonutChart;
  