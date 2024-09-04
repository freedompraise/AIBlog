import { supabase } from '../services/supabaseClient';

export const fetchPosts = async () => {
    const cachedPosts = JSON.parse(localStorage.getItem("posts"));
    try {
        if (cachedPosts ) {
            return cachedPosts
        } else{
            const response = await supabase.from('Post').select('*');
            localStorage.setItem("timestamp", new Date().getTime());
            localStorage.setItem("posts", JSON.stringify(response.data));
            return response.data;
        }
    }  catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }   
};

