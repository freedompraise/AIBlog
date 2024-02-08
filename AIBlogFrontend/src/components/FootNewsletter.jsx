import { React, useState } from "react";
import { useForm } from "react-hook-form";

const NavNewsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <form id="newsletter" className="border rounder-lg border:bg-black bg-white mt-8 px-4 text-black" onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl text-black my-4 ">Never Miss a Single Letter!</h2>
  
        {isSubmitted ? (
          <p className="text-center text-lg mb-4 font-semibold font-mono">
            You've successfully subscribed!
          </p>
        ) : (
          <div className="flex flex-col w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="border border-gray-700 bg-white rounded-md p-2 w-full mb-4 focus:border-indigo-500 text-black"
              required
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 w-full rounded-md mb-4">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default NavNewsletter;