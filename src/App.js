import { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  useRoutes
} from "react-router-dom";
import router from "./router";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const routing = useRoutes(router(isLoggedIn));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {routing}
    </Suspense>
  );
}

export default App;

