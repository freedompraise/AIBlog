import { useEffect, useState } from "react";
import { supabase } from "../../../services/supabaseClient";

export const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("Post").select("*");
      if (!error) {
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);

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
};
