// api.js
import axios from "axios";

// const postsUrl = "http://localhost:8000/api/posts/";
const postsUrl = "https://eliteaiblog-v1.onrender.com/api/posts/";

export const getPosts = async () => {
  const cachedPosts = JSON.parse(localStorage.getItem("posts"));
  try {
    if (cachedPosts) {
      return cachedPosts.sort((a, b) => (a.category === "Pilot Post" ? -1 : 1)); // Sort cached data
    } else {
      const response = await axios.get(postsUrl);
      const sortedPosts = response.data.sort((a, b) => (a.category === "Pilot Post" ? -1 : 1)); // Sort fetched data
      localStorage.setItem("posts", JSON.stringify(sortedPosts));
      localStorage.setItem("timestamp", new Date().getTime());
      return sortedPosts;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

    
export const getPost = async (slug) => {
  const cachedPosts = JSON.parse(localStorage.getItem("posts"));
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