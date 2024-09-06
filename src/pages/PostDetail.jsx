import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { FormattedText, Loader } from "../components";
import { Link } from "react-router-dom";

const PostDetail = ({
  match: {
    params: { slug },
  },
}) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("Post")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.log("error");
        } else {
          setPost(data);
        }

        setLoading(false);
      } catch (error) {
        throw error;
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="py-2 mt-12 text-black bg-white mx-auto px-2 lg:px-48 overflow-auto">
      <nav className="breadcrumb text-sm font-mono">
        <Link
          to="/"
          className="text-gray-800 hover:text-indigo-600 hover:underline"
        >
          Elite Blog
        </Link>{" "}
        {">"} <span className="text-gray-800">Posts</span>
        {" > "}
        <span className="">{post.title}</span>
      </nav>

      <h1 className="text-5xl font-bold mt-4">{post.title}</h1>
      <h3 className="text-3xl mt-2 font-semibold mb-4">{post.snippet}</h3>
      <p className="font-mono">
        Posted on: {new Date(post.created_at).toLocaleDateString()}
      </p>

      <img
        src={post.image ? post.image : "/default-photo.webp"}
        alt={post.title}
        className="w-full my-4 font-sans"
      />

      <div className="mt-8 bg-white text-left">
        <FormattedText text={post.content} />
      </div>
    </div>
  );
};

export default PostDetail;
