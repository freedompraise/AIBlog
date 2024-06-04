import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      if (!email || !password) {
        setError('Please fill in the fields');
        return;
      }
      const {
        data: { user, session },
        error,
      } = await useAuth().login(email, password);
      if (error) {
        setError(error.message);
      }
      if (user && session) {
        console.log('User:', user);
      }
    } catch (error) {
      setError('Email or Password Incorrect');
    }
    setLoading(false);
  };

  return (
    <form 
      onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm text-gray-600">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              placeholder="Email"
            />
          </label>
          <label className="block mb-2 text-sm">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              placeholder="Password"
            />
          </label>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </form>
  );
};

export default Login;
