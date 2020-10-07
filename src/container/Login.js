import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("admin");

  let history = useHistory();

  const allDetails = [];
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const details = {
      userName,
      password,
      id,
      name,
      address,
      phoneNumber,
      role,
    };
    allDetails.push(details);
    console.log(allDetails);
    history.push({
      pathname: "/UserDetails",
      state: { userDetails: details },
    });
  };

  return (
    <div className="login">
      <h1>Login form</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="formControl">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">password</label>
          <input
            required
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="id">id</label>
          <input
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="address">address</label>
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            minLength="10"
            maxLength="10"
            type="number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="role">role</label>
          <select
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
