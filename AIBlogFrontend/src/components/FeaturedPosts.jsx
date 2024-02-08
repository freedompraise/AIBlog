import React from 'react';

const FeaturedPosts = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl mt-3 text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Placeholder Image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-tl-lg">
            Post Name 1
          </h3>
        </div>
        <div className="relative">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Placeholder Image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-tl-lg">
            Post Name 2
          </h3>
        </div>
        <div className="relative">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Placeholder Image"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-tl-lg">
            Post Name 3
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
