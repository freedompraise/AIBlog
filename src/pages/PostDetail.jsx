import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPost, fetchRelatedPosts, likePost } from "../services/api";
import { FormattedText, Loader } from "../components";
import { PostGrid } from "../components/PostGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const PostDetail = ({
  match: {
    params: { slug },
  },
}) => {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPost(slug);
        setPost(data);
        setLikes(data.likes);
        const related = await fetchRelatedPosts(slug);
        setRelatedPosts(related);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = async () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];

    if (likedPosts.includes(slug)) {
      return;
    }

    try {
      const data = await likePost(slug);
      setLikes(data.likes);

      likedPosts.push(slug);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const estimatedReadingTime = Math.ceil(post.content?.split(" ").length / 200);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

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
          Posted on: {new Date(post.created_at).toLocaleDateString()} |{" "}
          {estimatedReadingTime} min read
        </p>

        <img
          src={post.image ? post.image : "/default-photo.webp"}
          alt={post.title}
          className="w-full my-4 font-sans"
        />

        <div className="mt-8 bg-white text-left">
          <FormattedText text={post.content} />
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-gray-600">Share this post:</p>
          <div className="flex gap-4 mt-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <button
            onClick={handleLike}
            className={`flex items-center mt-6 bg-indigo-500 hover:bg-blue-700 py-2 px-4 rounded-md text-white ${
              JSON.parse(localStorage.getItem("likedPosts"))?.includes(slug)
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={JSON.parse(localStorage.getItem("likedPosts"))?.includes(
              slug
            )}
          >
            <FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> Like{" "}
            {post.likes ? `(${likes})` : ""}
          </button>
        </div>

        <h2 className="text-4xl font-bold mt-12 mb-4">Related Posts</h2>
        <PostGrid posts={relatedPosts} />
      </div>
    </div>
  );
};

export default PostDetail;
