import React from "react";
import { MainButton, Wrapper } from "../../../components/CommonComponents";
import styled from "styled-components";

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  border: 1px solid ${(props) => props.theme.grayColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const SignInPresenter = ({
  moveLinkHandler,
  loginUserHandler,
  inputUserId,
  inputPassword,
}) => {
  return (
    <Wrapper dr={`column`} height={`100vh`}>
      <Wrapper dr={`column`}>
        <TextInput placeholder={`ID...`} {...inputUserId} />
        <TextInput placeholder={`PASSWORD...`} {...inputPassword} />
      </Wrapper>
      <Wrapper>
        <MainButton width={`60px`} height={`40px`} onClick={loginUserHandler}>
          로그인
        </MainButton>
        <MainButton
          width={`60px`}
          height={`40px`}
          onClick={() => moveLinkHandler("/find")}
        >
          아이디/비밀번호 찾기
        </MainButton>

        <MainButton
          width={`60px`}
          height={`40px`}
          onClick={() => moveLinkHandler("/")}
        >
          돌아가기
        </MainButton>
      </Wrapper>
    </Wrapper>
  );
};

export default SignInPresenter;
