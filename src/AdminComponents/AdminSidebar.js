import "../Admin.css";
import { Link } from "react-router-dom";
function AdminSidebar() {
  return (
    <aside className="sidebar">
      <nav className="adminNav">
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/adminusers">Users</Link>
          </li>
          <li>
            <Link to="/createusers">Create Users</Link>
          </li>
          <li>
            <Link to="/adminproducts">Products</Link>
          </li>
          <li>
            <Link to="/createproducts">Create Products</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
