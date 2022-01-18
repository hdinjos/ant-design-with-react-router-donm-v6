import BaseLayout from "./views/Layout/BaseLayout";
import Login from "./views/Auth/Login";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
      </Route>
      <Route path="login" element={<Login />}>
      </Route>
    </Routes>
  );

}


export default App;

