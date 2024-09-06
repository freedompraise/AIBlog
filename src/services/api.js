import { supabase } from "../services/supabaseClient";

export const fetchPosts = async () => {
  const cachedPosts = JSON.parse(localStorage.getItem("posts"));
  try {
    if (cachedPosts) {
      return cachedPosts;
    } else {
      const response = await supabase.from("Post").select("*");
      localStorage.setItem("timestamp", new Date().getTime());
      localStorage.setItem("posts", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPost = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("Post")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.log("error");
    } else {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const likePost = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("Post")
      .select("likes")
      .eq("slug", slug)
      .single();

    if (error) {
      console.log("error");
    } else {
      const likes = data.likes + 1;
      const { data, error } = await supabase
        .from("Post")
        .update({ likes })
        .eq("slug", slug);

      if (error) {
        console.log("error");
      } else {
        return data;
      }
    }
  } catch (error) {
    throw error;
  }
};

export const fetchRelatedPosts = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("Post")
      .select("*")
      .neq("slug", slug)
      .limit(3);

    if (error) {
      console.log("error");
    } else {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
