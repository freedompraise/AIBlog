import { CreatePost } from "./CreatePost";
import { ListPosts } from "./ListPosts";
import { EditPost } from "./EditPost";
import { Logout } from "./components/Logout";
import { useState } from "react";

const AdminDashboard = () => {
  if (localStorage.getItem("token") != import.meta.env.VITE_CUSTOM_TOKEN) {
    window.location.href = "/login";
  }
  const [editPostSlug, setEditPostSlug] = useState(null);

  const renderContent = () => {
    if (editPostSlug) {
      return (
        <div className="w-full">
          <EditPost slug={editPostSlug} setEditPostSlug={setEditPostSlug} />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <div className="w-full md:w-1/2 mb-0 sm:mb-10">
            <CreatePost />
          </div>
          <div className="w-full md:w-1/2">
            <ListPosts setEditPostSlug={setEditPostSlug} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Logout />
      </div>

      {renderContent()}
    </div>
  );
};

export default AdminDashboard;
