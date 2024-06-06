import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";

export const EditPost = ({ slug, setEditPostSlug }) => {
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

  if (!post) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form>
        <label className="block font-bold mb-2">Title</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="block w-full p-2 pl-10 text-gray-700 rounded"
        />
        <label className="block font-bold mb-2">Snippet</label>
        <textarea
          value={post.snippet}
          onChange={(e) => setPost({ ...post, snippet: e.target.value })}
          className="block w-full p-2 pl-10 text-gray-700 rounded"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={setEditPostSlug(null)}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
