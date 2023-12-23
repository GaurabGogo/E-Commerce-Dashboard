import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function signUp(e) {
    e.preventDefault();
    let item = { ...user };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <div className="offset-sm-3 col-sm-6">
      <h1>Register Page</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={signUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
