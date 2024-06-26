const clearLocalStorage = () => {
  const timestamp = localStorage.getItem("timestamp");
  const now = new Date().getTime();
  const timeDifference = (now - timestamp) / 60000;
  if (timeDifference > 120) {
    // set cache time to 2 hours
    localStorage.removeItem("posts");
    localStorage.removeItem("timestamp");
  }
};

export default clearLocalStorage;
