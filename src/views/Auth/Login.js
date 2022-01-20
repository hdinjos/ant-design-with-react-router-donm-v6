import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reqLogin } from "../../store/actions/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const toLogin = async (e) => {
    e.preventDefault();
    const request = {
      email, password
    }
    dispatch(reqLogin(request));
  };

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={toLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Pasword" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;