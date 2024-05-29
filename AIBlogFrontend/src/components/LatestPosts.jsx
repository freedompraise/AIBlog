import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { supabase } from '../services/supabaseClient';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await supabase.from('Post').select('*');
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);


if (loading) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center text-black sm:h-50 lg:h-100 items-center my-64">
      <FontAwesomeIcon className='fa-spin' icon={faSpinner} spin size="3x" />
      <p className="text-2xl font-mono">"The best things in life are worth waiting for." - <span className='text-blue-700 font-xs'>Abraham Lincoln</span></p>
    </div>
  );
}

  return (
    <section className="container my-8 mx-auto">
      <div className="rectangle text-left text-white px-4 py-1 bg-black font-mono mt-4">LATEST POSTS</div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {posts.map((post) => (
              <div key={post.slug} className="flex p-2 flex-col rounded-lg shadow-md">
                <Link to={`/post/${post.slug}`}>
                  <img
                    src= {post.image ? post.image : '/default-photo.webp'}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="">
                    <h3  className={`text-2xl font-sans text-semibold pr-2 ${post.slug === "unleashing-africa's-potential" ? 'text-3xl underline text-uppercase' : ''}`}>
                    {post.title}
                    </h3>
                    <p className="text-sm text-blue-700">{post.category}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
    </section>
  );
};

export default LatestPosts;
