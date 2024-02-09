import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Prism } from 'react-prism'; // Library for syntax highlighting
import rehypeRaw from 'rehype-raw'; // Library for rendering raw HTML from API

// Assuming you have a component for loading indicators
import LoadingIndicator from './LoadingIndicator';

const PostDetail = ({ match: { params: { slug } } }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example free API endpoint (replace with your actual API URL)
  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${slug}`;

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [apiUrl, slug]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

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
        {/* Render content with syntax highlighting and raw HTML support */}
        <Prism
          language="html" // Assuming content is HTML-like
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
