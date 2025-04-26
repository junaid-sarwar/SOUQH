import { NavLink } from "react-router-dom";
import { FiHome, FiBarChart2, FiBox, FiUsers, FiSettings } from "react-icons/fi";

const navItems = [
  { label: "Overview", icon: <FiHome />, path: "/dashboard" },
  { label: "Sales", icon: <FiBarChart2 />, path: "/dashboard/sales" },
  { label: "Products", icon: <FiBox />, path: "/dashboard/products" },
  { label: "Update Products", icon: <FiBox />, path: "/dashboard/update-product" },
  { label: "Customers", icon: <FiUsers />, path: "/dashboard/customers" },
  { label: "Settings", icon: <FiSettings />, path: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6 fixed top-0 left-0 z-10">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-2">
        {navItems.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center space-x-3 p-2 rounded-md text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
