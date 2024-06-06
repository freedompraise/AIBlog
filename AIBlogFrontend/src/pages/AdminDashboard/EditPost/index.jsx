import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";
import { PostForm } from "../components/PostForm";

export const EditPost = ({ setEditPostSlug, slug }) => {
  const [post, setPost] = useState(null);

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

  const handleSaveChanges = async () => {
    const { error } = await supabase
      .from("Post")
      .update({ title: post.title, snippet: post.snippet })
      .eq("slug", slug);
    if (!error) {
      setEditPostSlug(null);
    }
  };

  if (!post) return null;

  return (
    <>
      <h2 className="text-2xl font-bold mt-4">Edit Post</h2>
      <PostForm
        title={post.title}
        snippet={post.snippet}
        content={post.content}
        categories={post.category}
        onChange={(newPost) => setPost(newPost)}
        onSubmit={handleSaveChanges}
      />
    </>
  );
};
