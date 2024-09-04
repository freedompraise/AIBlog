import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { supabase } from "../services/supabaseClient";

const Articles = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    document.title = `All Posts - Elite AI Blog`;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await supabase.from("Post").select("*");
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }
    , []);  
    
if (loading) {
    return (
        <section className="container bg-white h-100 mx-auto mb-auto px-4">
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
                                src={post.image ?post.image : "/white.webp"}
                                alt={post.title}
                                className="w-full h-64 object-contain rounded-lg"
                            />
                        </Link>
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-600">{post.snippet}</p>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Articles;