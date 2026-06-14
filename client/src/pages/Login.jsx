import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
  if (email === "") {
    alert("Please enter email");
    return;
  }

  if (password === "") {
    alert("Please enter password");
    return;
  }

  alert("Login Successful");
};

  return (
    <div>
      <h1>Login</h1>

      <p>Welcome Back!</p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>

      <hr />

      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Login;