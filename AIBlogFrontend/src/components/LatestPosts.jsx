import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    title: "Post Title 1",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 1",
  },
  {
    id: 2,
    title: "Post Title 2",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 2",
  }, {
    id: 3,
    title: "Post Title 3",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 3",
  }, {
    id: 4,
    title: "Post Title 4",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 4",
  }, {
    id: 5,
    title: "Post Title 5",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 5",
  }, {
    id: 6,
    title: "Post Title 6",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 6",
  }, {
    id: 7,
    title: "Post Title 7",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 7",
  }, {
    id: 8,
    title: "Post Title 8",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 8",
  },
  {
    id: 9,
    title: "Post Title 9",
    image: "https://via.placeholder.com/500x300",
    snippet: "This is a short snippet of the post content.",
    name: "Author Name 9",
  },
];

const LatestPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl text-center mt-4">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full text-yellow-900 h-64 object-cover rounded-t-lg" />
            <div className="">
              <h3 className="text-xl text-yellow-500 font-sans">{post.title}</h3>
              <p className="text-white">{post.snippet}</p>
              <p className="text-sm text-blue-500 font-bold ">{post.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)} className="text-blue-500 hover:text-blue-700 mr-2">
            Previous
          </button>
        )}
        <span className="font-bold px-2">{currentPage}</span>
        {currentPage < Math.ceil(posts.length / postsPerPage) && (
          <button onClick={() => handlePageChange(currentPage + 1)} className="text-blue-500 hover:text-blue-700 ml-2">
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;
