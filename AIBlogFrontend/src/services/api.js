// api.js
import axios from "axios";

// const postsUrl = "http://localhost:8000/api/posts/";
const postsUrl = "https://eliteaiblog-v1.onrender.com/api/posts/";
const cachedPosts = JSON.parse(localStorage.getItem("posts"));

export const getPosts = async () => {
  try {
    if (cachedPosts) {
      return (cachedPosts)
    } else{
      
      const response = await axios.get(postsUrl);
      localStorage.setItem("posts", JSON.stringify(response.data));
      const timestamp = new Date().getTime();
      localStorage.setItem("timestamp", timestamp);
      return response.data; 
    }
    
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; 
  }
};

    
export const getPost = async (slug) => {
    try {
      const cachedPost = cachedPosts.find((post) => post.slug  === slug )
        if (cachedPost){
          return cachedPost;
        } else {
          const response = await axios.get(`${postsUrl}${slug}/`);
        return response.data; 
        }
    } catch (error) {
        console.error("Error fetching post:", error);
        throw error; 
    }
    };