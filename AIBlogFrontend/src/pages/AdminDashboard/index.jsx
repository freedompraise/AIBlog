import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

const AdminDashboard = () => {
  if (localStorage.getItem("token") != import.meta.env.VITE_CUSTOM_TOKEN){
    window.location.href = "/login";
  }

 
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex sm:flex-col lg:flex-wrap gap-4 mt-4">
      <CreatePost />
      <EditPost />
      </div>
    </div>
  );
};

export default AdminDashboard;
