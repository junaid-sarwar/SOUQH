import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  console.log('LoginForm Rendered');
  console.log('Redux State - isAuthenticated:', isAuthenticated);
  console.log('Redux State - error:', error);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    dispatch(loginUser(username, password));
  };

  useEffect(() => {
    console.log('useEffect called - isAuthenticated changed:', isAuthenticated);
    if (isAuthenticated) {
      console.log('User authenticated! Navigating to /dashboard');
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
