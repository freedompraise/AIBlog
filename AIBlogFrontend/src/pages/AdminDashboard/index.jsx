import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

const AdminDashboard = () => {
 
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex sm:flex-row lg:flex-wrap gap-4 mt-4">
      <CreatePost />
      <EditPost />
      </div>
    </div>
  );
};

export default AdminDashboard;
