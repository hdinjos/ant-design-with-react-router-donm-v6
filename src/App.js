import BaseLayout from "./views/Layout/BaseLayout";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import { useSelector } from "react-redux";
// import { reLogin } from './store/actions/auth';

import parseJwt from "./utils/jwtParse";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const dispatch = useDispatch()

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <BaseLayout /> : <Navigate to="/login" replace />}>
        <Route path="/" element={<Navigate to="/nav-2" />} />
        <Route path="nav-1" element={<Nav1 />} />
        <Route path="nav-2" element={<Nav2 />} />
        <Route path="nav-3" element={<Nav3 />} />
      </Route>
      <Route path="login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );

}


const Nav1 = () => {
  return (
    <div>
      <h1>Nav 1</h1>
    </div>
  );
}

const Nav2 = () => {
  return (
    <div>
      <h1>Nav 2</h1>
    </div>
  );
}

const Nav3 = () => {
  return (
    <div>
      <h1>Nav 3</h1>
    </div>
  );
}

export default App;

