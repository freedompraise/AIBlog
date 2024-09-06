import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export const PostGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="flex p-2 flex-col rounded-lg shadow-lg bg-white"
        >
          <Link to={`/post/${post.slug}`} className="hover:text-indigo-600">
            <img
              src={post.image ? post.image : "/default-photo.webp"}
              alt={post.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div>
              <p className="text-xs font-mono">
                {DateTime.fromISO(post.created_at).toLocaleString(
                  DateTime.DATE_FULL
                )}
              </p>
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
  );
};
