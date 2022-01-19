import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reqLogin } from "../../store/actions/auth";
// import { setDecrement, setIncrement } from "../../store/actions/counter"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  const toLogin = async (e) => {
    e.preventDefault();
    const request = {
      email, password
    }
    dispatch(reqLogin(request));

    // navigate("/nav-2");
  };

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={toLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Pasword" />
        <button type="submit">Login</button>
      </form>
      {/* {counter} */}
      {/* <button onClick={() => dispatch(setIncrement())}>Tambah</button> */}
      {/* <button onClick={() => dispatch(setDecrement())}>Kurang</button> */}

    </div>
  );
}

export default Login;