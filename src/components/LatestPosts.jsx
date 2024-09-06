import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./index.js";
import { fetchPosts } from "../services/api.js";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        if (data.length !== 0) {
          setLoading(false);
          setPosts(data);
        }
      } catch (error) {
        setError("Failed to load posts. Please try again later.");
        throw new Error("No posts found.");
      }
    };
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center mb-200 h-screen">
        <Loader className="w-12 h-12" />
      </div>
    );
  }

  if (error) {
    return (
      <section className="container my-8 mx-auto">
        <div className="rectangle text-left text-white px-4 py-1 bg-red-500 font-mono mt-4">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="rectangle text-left text-white sm:mx-2 px-4 py-1 bg-black font-mono mt-4">
        LATEST POSTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.slug}
            className="flex p-2 flex-col rounded-lg shadow-lg bg-white"
          >
            <Link to={`/post/${post.slug}`} className="hover:text-indigo-600">
              <img
                src={post.image ? post.image : "/default-photo.webp"}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="">
                <h3
                  className={`text-3xl font-serif text-semibold pr-2 ${
                    post.slug === "unleashing-africa's-potential"
                      ? "underline text-uppercase"
                      : ""
                  }`}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-blue-700">{post.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav>
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                onClick={() => paginate(1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === 1
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-200"
                }`}
                disabled={currentPage === 1}
              >
                First
              </button>
            </li>
            {Array.from({
              length: Math.ceil(posts.length / postsPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(Math.ceil(posts.length / postsPerPage))}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === Math.ceil(posts.length / postsPerPage)
                    ? "bg-gray-100"
                    : "bg-white hover:bg-gray-200"
                }`}
                disabled={
                  currentPage === Math.ceil(posts.length / postsPerPage)
                }
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default LatestPosts;
