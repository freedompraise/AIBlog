import React, { useState, useEffect } from 'react';
import { getPost } from '../services/api';
import { FormattedText } from '../components';

const PostDetail = ({ match: { params: { slug } } }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
 
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(slug);
        setPost(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPost();
  }
  , [slug]);

  if (error) {
    return <div className='p-4 text-center mt-4' >Error loading post: {error.message}</div>;
  }

  if (!post) {
    return <div className='p-4 mt-4 text-center'>Loading...</div>;
  }

  return (
    <div className="container text-center text-black bg-white mx-auto max-w-screen-xl mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">
        Posted on: {new Date(post.date_created).toLocaleDateString()} in {post.category}
      </p>

      <img src={`https://placeimg.com/640/480/${post.category}`} alt={post.image_alt_text} className="w-full mb-4" />

      <div className="max-w-screen-sm px-2 bg-white text-black">
        <FormattedText text={post.content} />
      </div>


      <div className="">
        {/* This section is not functional yet, so just display a placeholder */}
      <h2 className="text-2xl font-bold mb-2 mt-12">Comments</h2>
        <p>Comments coming soon ...</p>
      </div>
    </div>
  );
};

export default PostDetail;
