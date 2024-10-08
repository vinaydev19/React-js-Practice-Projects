import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </>
  );
}

export default Login;
