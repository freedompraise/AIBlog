import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostDetail = ({ match: { params: { slug } } }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // Replace with your actual DRF API URL
  const apiUrl = `http://localhost:8000/api/posts/${slug}`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error fetching post: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchPost();
  }, [apiUrl, slug]);


  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Assuming the API response structure has 'title', 'created_at', 'category', 'content', and 'comments'
  const { title, created_at, category, content, comments } = post;

  return (
    <div className="post-detail">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-4">
        Posted on: {new Date(created_at).toLocaleDateString()} in {category}
      </p>

      <img src={`https://placeimg.com/640/480/${category}`} alt={category} className="w-full mb-4" />

      <div className="content">
        <SyntaxHighlighter language="html" style={okaidia} showLineNumbers>
          {content}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {/* This section is not functional yet, so just display a placeholder */}
      <div className="comments">
        <p>Comment functionality is not yet implemented.</p>
      </div>
    </div>
  );
};

export default PostDetail;
