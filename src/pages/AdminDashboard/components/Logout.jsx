export const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
