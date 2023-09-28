import AdminSidebar from "./AdminSidebar";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Link, useNavigate } from "react-router-dom";
function AdminUsers() {
  const tableRef = useRef(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://159.65.21.42:9000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        $(tableRef.current).DataTable({
          paging: true,
          pageLength: 10,
          searching: true,
          responsive: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  const handleDelete = (userId) => {
    fetch(`http://159.65.21.42:9000/user/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Deleted");
        navigate("/admin");
      });
  };
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Users</h1>
        </header>
        <main>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link className="edit-button" to={`/editusers/${user._id}`}>
                      Edit
                    </Link>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default AdminUsers;
