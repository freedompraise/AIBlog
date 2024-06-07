import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../data";
import { useState } from "react";

export const PostForm = ({ postData, setPostData, onSubmit }) => {
  const [internalData, setInternalData] = useState(postData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInternalData((prevData) => ({ ...prevData, [name]: value }));
    console.log("internalData:", internalData); // Added log
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setInternalData((prevData) => ({ ...prevData, category: value }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={postData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="snippet" className="block font-bold mb-2">
          Snippet
        </label>
        <textarea
          id="snippet"
          value={postData.title} // This should be postData.snippet
          onChange={handleChange}
          placeholder="Enter snippet"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="content" className="block font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={postData.content}
          onChange={handleChange}
          placeholder="Enter content"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-80"
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
                checked={postData.category === category.value}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
        Send
      </button>
    </form>
  );
};
