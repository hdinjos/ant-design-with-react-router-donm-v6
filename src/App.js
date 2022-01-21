import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Spin } from 'antd';
import {
  useRoutes, useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import router from "./router";
import style from "./assets/style/custom/transition.module.css"

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const routing = useRoutes(router(isLoggedIn), location);
  return (
    <Suspense fallback={<div><Spin /></div>}>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames={style.fade} timeout={300}>
          {routing}
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
}

export default App;

