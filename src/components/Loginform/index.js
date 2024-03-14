import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [credentialError, setError] = useState("");

  let history = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const OnsubmitData = (event) => {
    event.preventDefault();

    if (username === "kishore" && password === "kishore@2024") {
      setUsernameError("");
      setPasswordError("");
      history("/home", { replace: true });
      console.log("Login successful");
    } else if (username !== "kishore") {
      setUsernameError("Enter valid username");
      setPasswordError("");
    } else if (password !== "kishore") {
      setPasswordError("Enter valid password");
      setUsernameError("");
    } else {
      setError("username and  password doesn't match");
    }
  };

  return (
    <div className="loginform-container">
      <div>
        <h1>login credentials</h1>
        <p>username : kishore</p>
        <p>password : kishore@2024</p>
        <p>credentials are Case-sensitive </p>
        
      </div>
      <h1>Login form</h1>
      <div className="form-conatainer">
        <form onSubmit={OnsubmitData}>
          <div className="inputelement-container">
            <label htmlFor="username" className="labelElement">
              UserName
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={onChangeUsername}
              className="input-element"
              id="username"
            />
            <span className="Error">{usernameError}</span>
          </div>
          <div className="inputelement-container">
            <label htmlFor="password" className="labelElement">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={onChangePassword}
              className="input-element"
            />
            <span className="Error">{passwordError}</span>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
