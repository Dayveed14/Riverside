import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
// import { Link } from "react-router-dom";
import "../Admin.css";

function CreateUsers() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regPassword, setPassword] = useState("");
  const [regEmail, setEmail] = useState("");
  const [validate, setValidate] = useState("false");
  const navigate = useNavigate();

  let obj = {};

  const handleReg = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      phoneNumber === "" ||
      regPassword === "" ||
      regEmail === ""
    ) {
      setValidate(true);
    } else {
      obj = {
        name: name,
        phone: phoneNumber,
        email: regEmail,
        password: regPassword,
      };
      fetch("http://159.65.21.42:9000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert("User Created");
          navigate("/admin");
        });
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-content">
        <header className="adminHeader">
          <h1>Create Users</h1>
        </header>
        <main>
          <div className="register">
            <form>
              <h2>CREATE A USER</h2>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <select id="title" name="title">
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={regEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {validate === true && regEmail === "" ? (
                <p className="validationError">Email required</p>
              ) : null}
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {validate === true && name === "" ? (
                <p className="validationError">Name required</p>
              ) : null}
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={regPassword}
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {validate === true && regPassword === "" ? (
                <p className="validationError">Password required</p>
              ) : null}
              <div className="form-group">
                <label htmlFor="dob">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {validate === true && phoneNumber === "" ? (
                <p className="validationError">Phone Number required</p>
              ) : null}
              <button type="submit" onClick={handleReg}>
                Create User
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateUsers;
