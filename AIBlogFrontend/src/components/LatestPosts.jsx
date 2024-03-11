import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setLoading(false);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }
  , []);



  return (
    <section className="container mt-8 mx-auto px-4">
      <div className="rectangle text-left text-white px-4 py-1 bg-black font-mono mt-4">LATEST POSTS</div>
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.slug} className="flex p-2 flex-col rounded-lg shadow-md">
                <Link to={`/post/${post.slug}`}>
                  <img
                    src= "/white.webp"
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="">
                    <h3  className={`text-2xl font-sans text-semibold pr-2 ${post.category === "Pilot Post" ? 'text-3xl underline text-uppercase' : ''}`}>
                    {post.title}
                    </h3>

                    <p className="">{post.author}</p>
                    <p className="text-sm text-blue-700">{post.category}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default LatestPosts;
