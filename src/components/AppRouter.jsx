import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MM00 from "../routers/layouts/MM00";
import SignIn from "../routers/layouts/SignIn";
import SignUp from "../routers/layouts/SignUp";
import MyPage from "../routers/layouts/MyPage";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={MM00} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/myPage" component={MyPage} />
    </Router>
  );
};

export default AppRouter;
