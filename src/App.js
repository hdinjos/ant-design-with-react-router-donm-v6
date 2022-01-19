import BaseLayout from "./views/Layout/BaseLayout";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import { useSelector } from "react-redux";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        {isLoggedIn ?
          <>
            <Route path="/" element={<Navigate to="/nav-2" />} />
            <Route path="nav-1" element={<Nav1 />} />
            <Route path="nav-2" element={<Nav2 />} />
            <Route path="nav-3" element={<Nav3 />} />
          </> :
          <>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Navigate to="/login" />} />
            </Route>
          </>
        }
      </Route>
      <Route path="login" element={<Login />}></Route>
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

// const Nav2 = () => {
//   return (
//     <div>
//       <h1>Nav 2</h1>
//     </div>
//   );
// }

export default App;

