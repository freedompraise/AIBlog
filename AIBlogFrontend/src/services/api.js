// api.js
import axios from "axios";

const postsUrl = "http://localhost:8000/api/posts/";

export const getPosts = async () => {
  try {
    const response = await axios.get(postsUrl);
    return response.data; 
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; 
  }
};

    
export const getPost = async (slug) => {
  try {
    const response = await axios.get(`${postsUrl}${slug}`);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error; 
  }
};