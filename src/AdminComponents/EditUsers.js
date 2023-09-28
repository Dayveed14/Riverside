import AdminSidebar from "./AdminSidebar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditUsers() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    fetch(`http://159.65.21.42:9000/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    if (newPassword) {
      userData.password = newPassword;
    }

    fetch(`http://159.65.21.42:9000/user/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          throw new Error("Failed to update user");
        }
      })
      .then((data) => {
        console.log(data);
        alert("User updated");
        navigate("/adminusers");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to update user. Please try again later.");
      });
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Edit User</h1>
        </header>
        <main>
          <div className="pdtBody">
            {user ? (
              <div className="userForm">
                <form onSubmit={handleSubmit}>
                  <h2>Edit User</h2>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditUsers;
