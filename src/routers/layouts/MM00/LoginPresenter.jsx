import React from "react";
import { MainButton, Wrapper } from "../../../components/CommonComponents";

const LoginPresenter = ({ moveLinkHandler, logout, getCookieData }) => {
  return (
    <Wrapper height={`100vh`}>
      {getCookieData ? (
        <MainButton onClick={() => logout("/")}>로그아웃</MainButton>
      ) : (
        <MainButton onClick={() => moveLinkHandler("/signIn")}>
          로그인
        </MainButton>
      )}
      {getCookieData ? (
        <MainButton onClick={() => moveLinkHandler(`/myPage`)}>
          마이페이지
        </MainButton>
      ) : (
        <MainButton onClick={() => moveLinkHandler("/signUp")}>
          회원가입
        </MainButton>
      )}
    </Wrapper>
  );
};

export default LoginPresenter;
