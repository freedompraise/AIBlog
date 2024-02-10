import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }
  , []);

  const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl text-center mt-4">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedPosts.map((post) => (
          <div key={post.slug} className="flex flex-col rounded-lg shadow-md">
            <Link to={`/post/${post.slug}`}>
            <img src={post.image} alt={post.title} className="w-full text-yellow-900 h-64 object-cover rounded-t-lg" />
            <div className="">
              <h3 className="text-xl text-yellow-500 font-sans">{post.title}</h3>
              <p className="text-white">{post.snippet}</p>
              <p className="text-sm text-blue-500 font-bold ">AI Blog Posts</p>
            </div>
              </Link>
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
