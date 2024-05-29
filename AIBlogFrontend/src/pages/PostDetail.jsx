import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
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
        const { data, error } = await supabase
          .from('Post')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          setError(error.message);
        } else {
          setPost(data);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) {
    {history.push('/')}
  }

  if (loading) {
    return <div className="p-4 h-100 bg-white mt-4 text-center">Loading...</div>;
  }

  return (
    <div className="container text-center py-2 text-black bg-white mx-auto px-2 lg:px-36 overflow-auto mb-2">
      <h1 className="text-5xl font-bold mt-8">{post.title}</h1>
      <h3 className='text-3xl mt-2 font-semibold mb-4'>{post.snippet}</h3>
      <p className="font-mono">
        Posted on: {new Date(post.created_at).toLocaleDateString()}
      </p>

      <img src={post.image ? post.image : '/default-photo.webp'} alt={post.title} className="w-full my-4 font-sans" />

      <div className="mt-8 bg-white text-left">
        <FormattedText text={post.content} />
      </div>
    </div>
  );
};

export default PostDetail;
