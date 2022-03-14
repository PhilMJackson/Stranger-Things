import React from "react";
import { useEffect, useState } from "react";
import Login from "./Login";
import Posts from "./Posts";
import SignUp from "./SignUp";

const Main = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div>
      <Login setToken={setToken} />
      <SignUp setToken={setToken} />
      <Posts />
    </div>
  );
};

export default Main;
