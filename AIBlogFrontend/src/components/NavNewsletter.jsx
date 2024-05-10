import { React, useState } from "react";
import { useForm } from "react-hook-form";

const NavNewsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <form id="newsletter" className="container bg-black mt-8 px-4 overflow-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto flex flex-col text-center">
        <h2 className="text-3xl font-sans mt-6 mb-4 text-white">Subscribe to our newsletter</h2>
        <p className="text-white mb-4">Get the latest news and updates delivered straight to your inbox.</p>

        {isSubmitted ? (
          <p className="text-lg mb-4 font-semibold font-mono text-gray-400">
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
              className="border border-gray-700 rounded-md p-2 w-full mb-4 focus:border-indigo-500"
              required
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 w-full rounded-md mb-8">
              SUBMIT
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default NavNewsletter;
