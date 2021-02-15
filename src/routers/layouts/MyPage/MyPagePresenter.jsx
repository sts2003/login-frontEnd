import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  MainButton,
  TextInput,
} from "../../../components/CommonComponents";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const InputWrapper = styled.div`
  width: 550px;
  height: 40px;

  border: 1px solid #0b0b0b;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  &:hover {
    transition: 0.5s;
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
  }
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

const MyPagePresenter = ({
  moveLinkHandler,
  userDetailData,
  _isDialogOpenToggle,
  isDialogOpen,
  valueEmail,
  valueName,
  valueUserId,
  valueMobile,
  valueDetailAddress,
  _valueChangeHandler,
  userDelete,
  userUpdate,
  searchPostHander,
  modifyZoneCode,
  modifyAddress,
}) => {
  return (
    <Wrapper al={`center`} ju={`center`} dr={`column`} height={`100vh`}>
      <InputWrapper>
        이름 :
        {userDetailData ? userDetailData.name : <Wrapper>로딩중...</Wrapper>}
      </InputWrapper>
      <InputWrapper>
        아이디 :
        {userDetailData ? userDetailData.userId : <Wrapper>로딩중...</Wrapper>}
      </InputWrapper>
      <InputWrapper>
        전화번호 :
        {userDetailData ? userDetailData.mobile : <Wrapper>로딩중...</Wrapper>}
      </InputWrapper>
      <InputWrapper>
        이메일 :
        {userDetailData ? userDetailData.email : <Wrapper>로딩중...</Wrapper>}
      </InputWrapper>
      <InputWrapper>
        우편번호 :
        {userDetailData ? (
          userDetailData.zoneCode
        ) : (
          <Wrapper>로딩중...</Wrapper>
        )}
      </InputWrapper>
      <InputWrapper>
        주소 :
        {userDetailData ? userDetailData.address : <Wrapper>로딩중...</Wrapper>}
      </InputWrapper>
      <InputWrapper>
        상세 주소 :
        {userDetailData ? (
          userDetailData.detailAddress
        ) : (
          <Wrapper>로딩중...</Wrapper>
        )}
      </InputWrapper>
      <Wrapper>
        <MainButton onClick={_isDialogOpenToggle}>정보 수정</MainButton>
        <MainButton onClick={userDelete}>회원 탈퇴</MainButton>
        <MainButton onClick={() => moveLinkHandler("/")}>돌아가기</MainButton>
      </Wrapper>
      <Wrapper>
        <Dialog
          onClose={_isDialogOpenToggle}
          aria-labelledby="customized-dialog-title"
          open={isDialogOpen}
          fullWidth={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={_isDialogOpenToggle}
            // class="dialog_title"
          >
            게시글 수정
          </DialogTitle>
          <DialogContent>
            <Wrapper>
              <Wrapper al={`flex-start`}>이메일</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    name="email"
                    value={valueEmail}
                    onChange={_valueChangeHandler}
                    placeholder="수정할 이메일을 쓰세요"
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>이름</Wrapper>
              <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                <TextInput
                  width={`230px`}
                  height={`30px`}
                  name="name"
                  value={valueName}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 이름을 쓰세요"
                />
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>아이디</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    name="userId"
                    value={valueUserId}
                    onChange={_valueChangeHandler}
                    placeholder="수정할 아이디를 쓰세요"
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>휴대전화</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    name="mobile"
                    value={valueMobile}
                    onChange={_valueChangeHandler}
                    placeholder="수정할 휴대전화 번호를 쓰세요"
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>우편번호</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    placeholder={`ZONECODE`}
                    readOnly={true}
                    {...modifyZoneCode}
                  />
                  <PostButton onClick={searchPostHander}> 검색 </PostButton>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>주소</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    readOnly={true}
                    {...modifyAddress}
                    placeholder="ADDRESS..."
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Wrapper al={`flex-start`}>상세주소</Wrapper>
              <Wrapper dr={`row`}>
                <Wrapper height={`30px`} al={`flex-start`} width={`180px`}>
                  <TextInput
                    width={`230px`}
                    height={`30px`}
                    name="detailAddress"
                    value={valueDetailAddress}
                    onChange={_valueChangeHandler}
                    placeholder="수정할 상세주소를 쓰세요"
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={userUpdate}>
              수정하기
            </Button>
            <Button color="secondary" onClick={_isDialogOpenToggle}>
              취소
            </Button>
          </DialogActions>
        </Dialog>
      </Wrapper>

      {/* Dialog Area */}
    </Wrapper>
  );
};

export default MyPagePresenter;
