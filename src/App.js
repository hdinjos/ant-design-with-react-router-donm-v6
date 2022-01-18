import BaseLayout from "./views/Layout/BaseLayout";
import Login from "./views/Auth/Login";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="nav-1" element={<Nav1 />} />
        <Route index path="nav-2" element={<Nav2 />} />
        <Route path="nav-3" element={<Nav3 />} />
      </Route>
      <Route path="login" element={<Login />}>
      </Route>
      {/* <Route path="nav-2" element={<Nav2 />}></Route> */}
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

