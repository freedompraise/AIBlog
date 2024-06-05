import React, {useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { categories } from "../../services/util";

const EditPost = () => {
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
                  {/* <p className="text-gray-500">Author: {post.author}</p> */}
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
    );
}


export default EditPost;

