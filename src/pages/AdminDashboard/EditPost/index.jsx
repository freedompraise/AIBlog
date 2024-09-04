import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";
import { categories } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const EditPost = ({ setEditPostSlug, slug }) => {
  const [post, setPost] = useState(null);
  const [editedPost, setEditedPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("Post")
        .select("*")
        .eq("slug", slug);
      if (!error) {
        setPost(data[0]);
      }
    };
    fetchPost();
  }, [slug]);

  const handleInputChange = (e) => {
    setEditedPost((prevEditedPost) => ({
      ...prevEditedPost,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSaveChanges = async () => {
    const updatedPost = { ...post, ...editedPost };
    const { error } = await supabase
      .from("Post")
      .update(updatedPost)
      .eq("slug", slug);
    if (!error) {
      alert("Post updated successfully!");
      setEditPostSlug(null);
    } else {
      alert("An error occurred. Please ensure network connectivity.");
    }
  };

  const handleCategoryChange = (e) => {
    setPost((prevPost) => ({ ...prevPost, category: e.target.value }));
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-4">Edit Post</h2>
      <form onSubmit={handleSaveChanges} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={editedPost.title || post?.title || ""}
            initially
            onChange={(e) => handleInputChange(e)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="snippet" className="block font-bold mb-2">
            Snippet
          </label>
          <textarea
            id="snippet"
            value={editedPost.snippet || post?.snippet || ""}
            onChange={(e) => handleInputChange(e)}
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
            value={editedPost.content || post?.content || ""}
            onChange={(e) => handleInputChange(e)}
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
                  checked={post?.category === category.value}
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
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Save Changes
        </button>
      </form>
    </>
  );
};
