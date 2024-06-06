import { useState } from "react";
import { categories } from "../data";
import { supabase } from "../../../services/supabaseClient";
import { PostForm } from "../components/PostForm";

export const CreatePost = () => {
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
    <>
      <h2 className="text-2xl font-bold mt-4">Create Post</h2>
      <PostForm
        title={newPost.title}
        snippet={newPost.snippet}
        content={newPost.content}
        categories={categories}
        onChange={(newPost) => setNewPost(newPost)}
        onSubmit={handleSubmit}
      />
    </>
  );
};
