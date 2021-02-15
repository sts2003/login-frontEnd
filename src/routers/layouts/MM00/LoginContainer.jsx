import React from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = ({ history }) => {
  const logout = (link) => {
    history.push(`/${link}`);
    sessionStorage.removeItem("login");
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return <LoginPresenter moveLinkHandler={moveLinkHandler} logout={logout} />;
};

export default LoginContainer;
