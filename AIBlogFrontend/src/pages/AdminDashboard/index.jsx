import { CreatePost } from "./CreatePost";
import { ListPosts } from "./ListPosts";
import { Logout } from "./components/Logout";

const AdminDashboard = () => {
  if (localStorage.getItem("token") != import.meta.env.VITE_CUSTOM_TOKEN) {
    window.location.href = "/login";
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Logout />
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-4">
        <div className="w-full md:w-1/2 mb-0 sm:mb-10">
          <CreatePost />
        </div>
        <div className="w-full md:w-1/2">
          <ListPosts />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
