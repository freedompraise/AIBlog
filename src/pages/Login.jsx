import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        email === import.meta.env.VITE_ADMIN_EMAIL &&
        password === import.meta.env.VITE_ADMIN_PASSWORD
      ) {
        localStorage.setItem("token", import.meta.env.VITE_CUSTOM_TOKEN);
        window.location.href = "/admin";
      } else {
        setErrors({ message: "Invalid email or password" });
      }
    } 
    catch (err) {
      throw new Error(err);  
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen"
    >
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Login</h2>
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
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
