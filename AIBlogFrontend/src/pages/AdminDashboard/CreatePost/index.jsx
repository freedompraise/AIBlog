import { useState } from "react";
import { categories } from "../data";
import { supabase } from "../../../services/supabaseClient";
import { PostForm } from "../components/PostForm";
import { createSlug } from "./util";

export const CreatePost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    snippet: "",
    content: "",
    // image: '',
    category: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = createSlug(newPost.title);
    newPost.slug = slug;
    const { error } = await supabase.from("Post").insert(newPost);
    if (!error) {
      setNewPost({
        title: "",
        snippet: "",
        content: "",
        // image: '',
        category: [],
      });
      alert("Post sent successfully!");
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
