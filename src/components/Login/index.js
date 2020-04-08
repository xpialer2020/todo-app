import React, { useState } from "react";
import axios from "axios";
import './index.css';
import '../style.css'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // todotest 12345678
  const onSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();

    if(username.match(/^[a-zA-Z0-9]+$/) == null){
      alert("Username incorrect")
      return false
    }
    if(password.match(/^[a-zA-Z0-9]+$/)  == null){
      alert("Password incorrect")
      return false
    }
    axios
      .post("/users/auth", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("header", response.data.token);
          props.history.push("/main");
        } else {
          
          props.history.push("/");
        }
      }).catch(function (error) {
        console.log(error);
        alert("Username or Password incorrect")
      })
  };

  return (
    <div className="main-login">
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Login</label><br/>
          <input
            className="login username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label><br/>
          <input
            className="login password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
