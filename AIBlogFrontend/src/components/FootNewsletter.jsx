import { useState } from "react";
import { useForm } from "react-hook-form";
import { subscribeUser } from "./util";

const NavNewsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // State for handling errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Access form errors

  const onSubmit = async (data) => {
    try {
      await subscribeUser(data.email);
      setIsSubmitted(true);
      setError(null);
    } catch (error) {
      console.error("Error subscribing user:", error);
      setError(error.message || "An error occurred while subscribing.");
    }
  };

  return (
    <form
      id="newsletter"
      className="mt-4 rounded-lg text-black overflow-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="container mx-auto flex flex-col text-center">
        <h2 className="text-xl font-bold my-4">Never Miss a Single Letter!</h2>

        {isSubmitted ? (
          <p className="text-lg text-blue-600 mb-4 font-semibold font-mono">
            You've successfully subscribed!
          </p>
        ) : (
          <div className="flex flex-col px-0 lg:px-36 w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="border border-gray-700 bg-white rounded-md p-2 w-full mb-2 focus:border-indigo-500"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">Email is required.</p>
            )}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 w-full rounded-md mb-4">
              Sign Up
            </button>
            {error && (
              <p className="text-red-500 text-sm">
                This email address is already subscribed
              </p>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default NavNewsletter;
