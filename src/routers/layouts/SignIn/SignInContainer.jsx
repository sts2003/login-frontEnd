import React, { useState, useEffect } from "react";
import SignInPresenter from "./SignInPresenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import useInput from "../../../hooks/useInput";
import { GET_USER_FOR_LOGIN, GET_COOKIES } from "./SignInQueries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

const SignInContainer = ({ history }) => {
  const [loginSkip, setLoginSkip] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);
  const inputUserId = useInput("");
  const inputPassword = useInput("");
  const [getUserForLoginMuataion] = useMutation(GET_USER_FOR_LOGIN);

  const {
    data: getCookieData,
    loading: getCookieLoading,
    refetch: getCookieRefetch,
  } = useQuery(GET_COOKIES, {
    variables: {
      cookieToken: cookies.login,
    },
  });

  // const { data: userData, refetch: userRefetch } = useQuery(
  //   GET_USER_FOR_LOGIN,
  //   {
  //     variables: {
  //       userId: inputUserId.value,
  //       userPassword: inputPassword.value,
  //     },
  //     skip: loginSkip,
  //   }
  // );

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

  const loginHandler = async () => {
    const { data } = await getUserForLoginMuataion({
      variables: {
        userId: inputUserId.value,
        userPassword: inputPassword.value,
      },
    });

    if (data.getUserForLogin.loginResult) {
      toast.info("로그인이 완료 되었습니다!");
      setCookie("login", data.getUserForLogin.loginResult);
      console.log(cookies);
    } else {
      toast.error("로그인에 실패하였습니다");
    }
  };

  // useEffect(() => {
  //   if (userData) {
  //     const user = userData.getUserForLogin;

  //     if (user.loginResult) {
  //       // sessionStorage.setItem("login", user.userData._id);
  //       toast.success("로그인 되었습니다.");
  //       setCookie("login", user.getUserForLogin.userData, [
  //         {
  //           HttpOnly: true,
  //         },
  //       ]);
  //       console.log(cookies);
  //       history.push("/");
  //     } else {
  //       toast.error("일치하는 로그인 정보가 없습니다.");
  //       history.push("/");
  //     }

  //     setLoginSkip(true);
  //   }
  // }, [userData]);

  const logoutHandler = (link) => {
    // sessionStorage.removeItem("login");
    removeCookie("login");
    history.push(`/${link}`);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };
  return (
    <SignInPresenter
      inputUserId={inputUserId}
      inputPassword={inputPassword}
      moveLinkHandler={moveLinkHandler}
      loginUserHandler={loginUserHandler}
      loginHandler={loginHandler}
      logoutHandler={logoutHandler}
      getCookieData={getCookieData && getCookieData.getCookie}
    />
  );
};
export default SignInContainer;
