import React from "react";
import LoginPresenter from "./LoginPresenter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginContainer = ({ history }) => {
  const logout = (link) => {
    sessionStorage.removeItem("login");
    toast.success("성공적으로 처리되었습니다.");
    history.push(`${link}`);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return <LoginPresenter moveLinkHandler={moveLinkHandler} logout={logout} />;
};

export default LoginContainer;
