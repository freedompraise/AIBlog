import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';


const posts = getPosts();

const Articles = () => {

    
if (!posts) {
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
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-600">{post.snippet}</p>
                    </div>
                ))}

            /</div>

        </div>
    );
}

export default Articles;