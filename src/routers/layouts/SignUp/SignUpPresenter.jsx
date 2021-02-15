import React from "react";
import { MainButton, Wrapper } from "../../../components/CommonComponents";
import styled from "styled-components";

const LowWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const JoinCheckButton = styled(Wrapper)`
  width: ${(props) => props.width};
  height: 50px;
  color: #f76262;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #f76262;
    color: #fff;
  }
`;

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

const JoinInput = styled.input`
  width: ${(props) => props.width || `100%`};
  height: 60px;
  padding: 0 10px;
  letter-spacing: 0.5px;
  background: #fff !important;
  color: #1d1b1b !important;
`;

const PostButton = styled.button`
  width: 140px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  margin-left: 10px;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const SignUpPresenter = ({
  moveLinkHandler,
  searchPostHander,
  newUserId,
  newUserPassword,
  passWordConfirm,
  createUserHandler,
  newName,
  newEmail,
  newMobile,
  newZoneCode,
  newAddress,
  newDetailAddress,
  setIsDuplicateCheck,
  checkDuplicateHandler,
}) => {
  return (
    <Wrapper height={`100vh`}>
      <Wrapper dr={`column`}>
        <Wrapper>
          <TextInput placeholder={`ID...`} {...newUserId}></TextInput>
          <JoinInput
            type="text"
            width={`450px`}
            readOnly={false}
            {...newUserId}
            onChange={(e) => {
              newUserId.setValue(e.target.value);
              setIsDuplicateCheck(false);
            }}
          />
          <JoinCheckButton width={`80px`} onClick={checkDuplicateHandler}>
            중복확인
          </JoinCheckButton>
        </Wrapper>
        <TextInput
          type="text"
          placeholder={`PASSWORD...`}
          {...newUserPassword}
        />
        <TextInput
          type="text"
          placeholder={`PASSWORD CHECK...`}
          {...passWordConfirm}
        />
        <TextInput type="text" placeholder={`E-MAIL...`} {...newEmail} />
        <TextInput type="text" placeholder={`NAME...`} {...newName} />
        <TextInput type="text" placeholder={`MOBILE...`} {...newMobile} />
        <LowWrapper>
          <TextInput
            type="text"
            width={`300px`}
            placeholder={`ZONECODE`}
            readOnly={true}
            {...newZoneCode}
          />
          <PostButton onClick={searchPostHander}> 검색 </PostButton>
        </LowWrapper>

        <TextInput
          type="text"
          placeholder={`ADDRESS...`}
          readOnly={true}
          {...newAddress}
        />

        <TextInput
          type="text"
          placeholder={`DETAIL ADDRESS...`}
          {...newDetailAddress}
        />
        <Wrapper>
          <MainButton
            width={`60px`}
            height={`40px`}
            onClick={() => createUserHandler()}
          >
            SIGN UP!
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
    </Wrapper>
  );
};

export default SignUpPresenter;
