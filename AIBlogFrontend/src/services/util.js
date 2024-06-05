export const getFooterHeight = () => {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    return footerElement.offsetHeight;
  } else {
    return 0;
  }
};

// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';
// dotenv.config();

// export const uploadImage = async (file) => {
//   try {
//     const response = await cloudinary.uploader.upload(file,
//       {
//         cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
//         api_key: process.env.VITE_CLOUDINARY_API_KEY,
//         api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
//     });
//     return response.secure_url;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

export const categories = [
  {
    name: "Understanding Concepts in AI",
    value: "Understanding Concepts in AI",
  },
  { name: "AI in education", value: "AI in education" },
  { name: "AI in News/Trends", value: "AI in News/Trends" },
  { name: "Safety and Ethics of AI", value: "Safety and Ethics of AI" },
];
