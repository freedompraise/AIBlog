import { useState, useRef } from "react";
import { categories } from "../data";
import { supabase } from "../../../services/supabaseClient";
import { createSlug } from "./util";

export const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: "",
    snippet: "",
    content: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = createSlug(postData.title);
    const updatedPostData = { ...postData, slug };
    console.log("postData before Supabase:", postData);
    const { error } = await supabase.from("Post").insert(updatedPostData);
    if (!error) {
      setPostData({
        title: "",
        snippet: "",
        content: "",
        category: "",
      });
      alert("Post sent successfully!");
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setPostData({ ...postData, category });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            placeholder="Enter title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="snippet" className="block font-bold mb-2">
            Snippet
          </label>
          <textarea
            id="snippet"
            value={postData.snippet}
            onChange={(e) =>
              setPostData({ ...postData, snippet: e.target.value })
            }
            placeholder="Enter snippet"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="content" className="block font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            placeholder="Enter content"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-80"
          ></textarea>
        </div>
        <div>
          <label className="block font-bold mb-2">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <label className="flex items-center" key={category.value}>
                <input
                  type="radio"
                  value={category.value}
                  checked={postData.category === category.value}
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
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Post
        </button>
      </form>
    </>
  );
};
