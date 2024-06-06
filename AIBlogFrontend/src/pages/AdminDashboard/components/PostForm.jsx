import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const PostForm = ({
  title,
  snippet,
  content,
  categories,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="Enter title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="snippet" className="block font-bold mb-2">
          Snippet
        </label>
        <textarea
          id="snippet"
          value={snippet}
          onChange={(e) => onChange({ snippet: e.target.value })}
          placeholder="Enter snippet"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="content" className="block font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => onChange({ content: e.target.value })}
          placeholder="Enter content"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-64"
        ></textarea>
      </div>
      <div>
        <label className="block font-bold mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <label className="flex items-center" key={category.value}>
              <input
                type="radio"
                value={category.value}
                checked={title === category.value}
                onChange={(e) => onChange({ category: e.target.value })}
                className="mr-2"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
        Submit
      </button>
    </form>
  );
};
