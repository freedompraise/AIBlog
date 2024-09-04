import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./index.js";
import { fetchPosts } from "../services/api.js";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log("data", data);
        if (data.length === 0) {
          throw new Error("No posts found.");
        }
      } catch (error) {
        console.error("Error fetching posts", error);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
        setPosts(data);
      }
    };
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mb-200 h-screen">
        <Loader className="w-12 h-12" />
      </div>
    );
  }

  if (error) {
    return (
      <section className="container my-8 mx-auto">
        <div className="rectangle text-left text-white px-4 py-1 bg-red-500 font-mono mt-4">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="container my-8 mx-auto">
      <div className="rectangle text-left text-white px-4 py-1 bg-black font-mono mt-4">
        LATEST POSTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex p-2 flex-col rounded-lg shadow-md"
          >
            <Link to={`/post/${post.slug}`}>
              <img
                src={post.image ? post.image : "/default-photo.webp"}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="">
                <h3
                  className={`text-3xl font-serif text-semibold pr-2 ${
                    post.slug === "unleashing-africa's-potential"
                      ? "underline text-uppercase"
                      : ""
                  }`}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-blue-700">{post.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
