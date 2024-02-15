import { React, useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.slice(0, 3));
        setLoading(false);
      }
      catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }
  , []);

  if (loading) {
    return (
      <section className="container mx-auto mb-auto px-4">
        <h2 className="text-2xl mt-3 font-mono text-center">Featured Posts</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-4 px-4">
      <h2 className="text-3xl mt-3 font-mono text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts && 
          posts.map((post) => (
            <div key={post.slug} className="relative">
              <Link to={`/post/${post.slug}`}>
              <img
            src= {post.image}
            alt={post.image_alt_text}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-tl-lg">
            {post.title}
          </h3>
              </Link>
        </div>
          ))
        }
        
      </div>
      <hr className="my-4 h-1/2 " />
    </section>
  );
};

export default FeaturedPosts;
