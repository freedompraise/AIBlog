import { supabase } from './supabaseClient';

const login = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (!user) {
      throw new Error('Invalid email or password');
    }
    console.log('User:', user);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { login };
