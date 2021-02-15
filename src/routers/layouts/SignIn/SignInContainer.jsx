import React, { useState, useEffect } from "react";
import SignInPresenter from "./SignInPresenter";
import { useQuery } from "react-apollo-hooks";
import useInput from "../../../hooks/useInput";
import { GET_USER_FOR_LOGIN } from "./SignInQueries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInContainer = ({ history }) => {
  const [loginSkip, setLoginSkip] = useState(true);

  const inputUserId = useInput("");
  const inputPassword = useInput("");

  const { data: userData, refetch: userRefetch } = useQuery(
    GET_USER_FOR_LOGIN,
    {
      variables: {
        userId: inputUserId.value,
        userPassword: inputPassword.value,
      },
      skip: loginSkip,
    }
  );

  console.log(userData);

  const loginUserHandler = () => {
    if (!inputUserId.value || inputUserId.value.trim() === "") {
      toast.error("아이디를 입력해주세요.");
      return;
    }

    if (!inputPassword.value || inputPassword.value.trim() === "") {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    setLoginSkip(false);
  };

  useEffect(() => {
    if (userData) {
      const user = userData.getUserForLogin;

      if (user.loginResult) {
        sessionStorage.setItem("login", user.userData._id);

        toast.success("로그인 되었습니다.");

        history.push("/");
      } else {
        toast.error("일치하는 로그인 정보가 없습니다.");
        history.push("/");
      }

      setLoginSkip(true);
    }
  }, [userData]);

  const moveLinkHandler = (link) => {
    history.push(link);
  };
  return (
    <SignInPresenter
      inputUserId={inputUserId}
      inputPassword={inputPassword}
      moveLinkHandler={moveLinkHandler}
      loginUserHandler={loginUserHandler}
    />
  );
};
export default SignInContainer;
