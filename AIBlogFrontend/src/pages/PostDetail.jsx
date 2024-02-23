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
    <div className="container text-center py-2 text-black bg-white mx-auto px-4 overflow-auto mb-2">
      <h1 className="text-5xl font-bold mt-8 mb-4 ">{post.title}</h1>
      <p className="font-sans">
        Posted on: {new Date(post.date_created).toLocaleDateString()} in {post.category}
      </p>

      <img src={post.image} alt={post.image_alt_text} className="w-full my-4 font-sans" />

      <div className="px-2 bg-white text-black">
        <FormattedText text={post.content} />
      </div>
    </div>
  );
};

export default PostDetail;
