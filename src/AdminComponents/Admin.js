import AdminContent from "./AdminContent";
import AdminSidebar from "./AdminSidebar";
// import { Link } from "react-router-dom";
import "../Admin.css";

function Admin() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Admin Dashboard</h1>
        </header>
        <main>
          <AdminContent />
        </main>
      </div>
    </div>
  );
}

export default Admin;
