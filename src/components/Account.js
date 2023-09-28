import img1 from "../images/logo(3).png";
import Footer from "./Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Account() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regPassword, setPassword] = useState("");
  const [regEmail, setEmail] = useState("");
  const [validate, setValidate] = useState("false");
  const navigate = useNavigate();

  const [email, setLoginEmail] = useState("");
  const [password, setloginPassword] = useState("");

  let obj = {};
  let loginObj = {};

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
          alert("Registration Successful");
          navigate("/account");
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Username and Password Required");
      return;
    } else {
      loginObj = {
        email: email,
        password: password,
      };
      fetch("http://159.65.21.42:9000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginObj),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.email === email) {
            alert("Welcome, Login Successful.");
            sessionStorage.setItem("UserLoggedIn", JSON.stringify(data));
            navigate("/");
          } else {
            alert("User Not Found");
          }
        });
    }
  };

  return (
    <div className="account">
      <nav>
        <Link to="/">
          <img src={img1} alt="" />
        </Link>
      </nav>
      <div className="accounts">
        <div className="register">
          <form>
            <h2>CREATE AN ACCOUNT</h2>
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
              Register
            </button>
          </form>
        </div>
        <div className="login">
          <form>
            <h2>LOGIN</h2>
            <div className="form-group">
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setloginPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Account;
