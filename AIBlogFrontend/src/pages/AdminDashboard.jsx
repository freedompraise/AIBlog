import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
// import { uploadImage } from '../services/util';
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../services/util";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    snippet: "",
    content: "",
    // image: '',
    category: [],
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("Post").select("*");
      if (!error) {
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);

  //   const handleImageUpload = async (e) => {
  //     const file = e.target.files[0];
  //     const imageUrl = await uploadImage(file);
  //     setNewPost({ ...newPost, image: imageUrl });
  //   };

  const handleCategoryChange = (e) => {
    setNewPost({ ...newPost, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("Post").insert(newPost);
    if (!error) {
      setNewPost({
        title: "",
        snippet: "",
        content: "",
        // image: '',
        category: [],
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="snippet" className="block font-bold mb-2">
                Snippet
              </label>
              <textarea
                id="snippet"
                value={newPost.snippet}
                onChange={(e) =>
                  setNewPost({ ...newPost, snippet: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label htmlFor="content" className="block font-bold mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {/* <div>
              <label htmlFor="image" className="block font-bold mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
            <div>
              <label className="block font-bold mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <label className="flex items-center" key={category.value}>
                    <input
                      type="radio"
                      value={category.value}
                      checked={newPost.category === category.value}
                      onChange={handleCategoryChange}
                      className="mr-2"
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Post
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Existing Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-md p-4 space-y-2"
              >
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p>{post.snippet}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">Author: {post.author}</p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
