// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// // import { useAuth } from '../context/AuthProvider';

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const { user, error: loginError } = await login(data.email, data.password);
//       if (loginError) {
//         setError(loginError.message);
//       } else {
//         console.log('User:', user.email);
//       }
//     } catch (error) {
//       setError('Email or Password Incorrect');
//     }
//     setLoading(false);
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center h-screen">
//       <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
//         <h2 className="text-3xl font-bold text-gray-800">Login</h2>
//         <label className="block mb-2 text-sm text-gray-600">
//           Email
//           <input
//             type="email"
//             {...register('email', { required: true })}
//             className="block w-full p-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
//             placeholder="Email"
//           />
//           {errors.email && <p className="text-sm text-red-500">Required</p>}
//         </label>
//         <label className="block mb-2 text-sm">
//           Password
//           <input
//             type="password"
//             {...register('password', { required: true })}
//             className="block w-full p-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
//             placeholder="Password"
//           />
//           {errors.password && <p className="text-sm text-red-500">Required</p>}
//         </label>
//         {error && (
//           <p className="text-sm text-red-500">{error}</p>
//         )}
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Login
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Login;
