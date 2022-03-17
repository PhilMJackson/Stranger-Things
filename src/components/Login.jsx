import React, { useState } from "react";
import { fetchLoginResults } from "../api/users";
import { useHistory } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const userSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await fetchLoginResults(username, password);
      if (result.success) {
        localStorage.setItem("username", username);
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
      }
      console.log(result);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
      history.push("/");
    }
  };

  return (
    <div>
      <form id="userQuery" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
