import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TopBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  // Dynamically get page title based on route
  const getPageTitle = () => {
    if (location.pathname.startsWith('/dashboard/sales')) return 'Sales';
    if (location.pathname.startsWith('/dashboard/products')) return 'Products';
    if (location.pathname.startsWith('/dashboard/customers')) return 'Customers';
    if (location.pathname.startsWith('/dashboard/settings')) return 'Settings';
    if (location.pathname.startsWith('/dashboard')) return 'Overview';
    if (location.pathname.startsWith('/home')) return 'Home';
    return 'Dashboard';
  };

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-white shadow rounded-lg fixed top-0 left-0 right-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>

      <div className="flex items-center gap-4">
        {/* Show username only if logged in */}
        {isAuthenticated && user && (
          <span className="text-gray-600 text-sm">Hi, {user.username}</span>
        )}

        {/* Show Login or Logout button based on authentication status */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
