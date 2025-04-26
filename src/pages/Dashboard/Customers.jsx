import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../features/auth/authSlice";
import customerData from "../../data/dummyCustomers.json";

const Customers = () => {
  // Directly select the users from Redux store
  const reduxUsers = useSelector(selectUsers);
  
  // State to hold the users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Check if users data exists in Redux, if not, use the dummy data
    if (reduxUsers && reduxUsers.length > 0) {
      setUsers(reduxUsers);
    } else {
      setUsers(customerData);
    }
  }, [reduxUsers]); // Dependency array ensures the effect runs only when reduxUsers changes

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500"; // Yellow for Pending
      case "Delivered":
        return "bg-green-500"; // Green for Delivered
      case "Rejected":
        return "bg-red-500"; // Red for Rejected
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Customers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">
              Total Orders: {user.orders.length}
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-600">Order Statuses:</h3>
              <ul className="space-y-2 mt-2">
                {user.orders.map((order) => (
                  <li key={order.id} className="flex items-center">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${getStatusColor(order.status)}`}
                    ></span>
                    <span className="ml-2 text-sm text-gray-500">{order.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
