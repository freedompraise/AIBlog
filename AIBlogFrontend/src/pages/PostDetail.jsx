import React, { useState, useEffect } from 'react';
import { getPost } from '../services/api';
import { FormattedText } from '../components';
import { useHistory } from 'react-router-dom';

const PostDetail = ({ match: { params: { slug } } }) => {
  const history = useHistory();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(slug);
        setPost(data);
        setLoading(false);
        document.title = `${data.title} - Elite AI Blog`;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPost();
  }
  , [slug]);

  if (error) {
    {history.push('/')}
  }

  if (loading) {
    return <div className="p-4 mt-4 text-center">Loading...</div>;
  }

  return (
    <div className="container text-center py-2 text-black bg-white mx-auto px-4 overflow-auto mb-2 mt-8">
      <h1 className="text-5xl font-bold mt-8 mb-4">{post.title}</h1>
      <p className="font-sans">
        Posted on: {new Date(post.date_created).toLocaleDateString()} in {post.category}
      </p>

      <img src={post.image ? post.image : '/default-photo.webp'} alt={post.title} className="w-full my-4 font-sans" />

      <div className="px-2 bg-white text-left">
        <FormattedText text={post.content} />
      </div>
    </div>
  );
};

export default PostDetail;
