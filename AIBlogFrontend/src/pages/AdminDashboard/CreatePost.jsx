import React, { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { categories } from "../../services/util";

const CreatePost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    snippet: "",
    content: "",
    // image: '',
    category: [],
  });

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
  );
};

export default CreatePost;
