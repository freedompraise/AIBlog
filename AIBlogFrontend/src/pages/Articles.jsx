import { React, useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Articles = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    document.title = `All Posts - Elite AI Blog`;

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
          <p className='text-center' >Loading...</p>
        </section>
      );
}

    return (
        <div className="container mx-auto px-4"
        >
            <h1 className="text-2xl font-bold text-center mt-6 mb-4">Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white shadow-lg p-4">
                        <Link to={`/post/${post.slug}`}>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </Link>
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-600">{post.snippet}</p>
                    </div>
                ))}

            /</div>

        </div>
    );
}

export default Articles;