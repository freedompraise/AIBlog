export const createSlug = (title) => {
  const words = title.split(" ");
  const slug = words.slice(0, 3).join("-");
  return slug;
};
