import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toLogin = (e) => {
    e.preventDefault();
    navigate("/nav-2");
  };

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={toLogin}>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Pasword" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;