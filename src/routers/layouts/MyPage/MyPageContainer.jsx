import React, { useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_USER_DETAIL, UPDATE_USER, DELETE_USER } from "./MyPageQueries";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useInput from "../../../hooks/useInput";

const MyPageContainer = ({ history }) => {
  const [updateUserMutation] = useMutation(UPDATE_USER);
  const [deleteUserMutation] = useMutation(DELETE_USER);
  const modifyZoneCode = useInput("");
  const modifyAddress = useInput("");
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem("login"));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = useState({
    userId: "",
    email: "",
    name: "",
    mobile: "",
    zoneCode: "",
    address: "",
    detailAddress: "",
  });

  const {
    data: userDetailData,
    loading: userDetailLoading,
    refetch: userDetailRefetch,
  } = useQuery(GET_USER_DETAIL, {
    variables: {
      id: isLogin,
    },
  });

  const userUpdate = async () => {
    if (isLogin === userDetailData.getUserDetail._id) {
      const { data } = await updateUserMutation({
        variables: {
          id: isLogin,
          userId: value.userId,
          email: value.email,
          name: value.name,
          mobile: value.mobile,
          zoneCode: modifyZoneCode.value,
          address: modifyAddress.value,
          detailAddress: value.detailAddress,
        },
      });

      console.log(data);
      if (data.updateUser) {
        toast.info("수정 성공");
        userDetailRefetch();
        window.sessionStorage.removeItem("login");
        moveLinkHandler(`/signin`);
      } else {
        toast.error("수정 실패");
      }
    } else {
      toast.error("수정 실패");
    }
  };

  const userDelete = async () => {
    const _userId = sessionStorage.getItem("login");

    if (_userId === userDetailData.getUserDetail._id) {
      confirmAlert({
        title: "DELETE USER",
        message: "삭제하시겠습니까 ?",
        buttons: [
          {
            label: "취소",
            onClick: () => {
              return false;
            },
          },
          {
            label: "확인",
            onClick: () => deleteUserHandler(_userId),
          },
        ],
      });
    }
  };
  const deleteUserHandler = async (_userId) => {
    const { data } = await deleteUserMutation({
      variables: {
        id: _userId,
      },
    });

    if (data.deleteUser) {
      toast.info("성공적으로 처리 되었습니다.");
      userDetailRefetch();
      window.sessionStorage.removeItem("login");
      history.push("/");
    } else {
      toast.error("잠시후 다시 시도해 주세요.");
    }
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const searchPostHander = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        modifyZoneCode.setValue(data.zonecode);
        modifyAddress.setValue(data.address);
      },
    }).open();
  };

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
    if (!isDialogOpen) {
      setValue({
        userId: JSON.parse(isLogin[0]).getUserDetail.userId,
        email: JSON.parse(isLogin[0]).getUserDetail.email,
        name: JSON.parse(isLogin[0]).getUserDetail.name,
        mobile: JSON.parse(isLogin[0]).getUserDetail.mobile,
        zoneCode: JSON.parse(isLogin[0]).getUserDetail.zoneCode,
        address: JSON.parse(isLogin[0]).getUserDetail.address,
        detailAddress: JSON.parse(isLogin[0]).getUserDetail.detailAddress,
      });
    }
  };

  return (
    <MyPagePresenter
      moveLinkHandler={moveLinkHandler}
      userDetailData={userDetailData && userDetailData.getUserDetail}
      _isDialogOpenToggle={_isDialogOpenToggle}
      modifyAddress={modifyAddress}
      modifyZoneCode={modifyZoneCode}
      isDialogOpen={isDialogOpen}
      valueEmail={value.email}
      valueName={value.name}
      valueUserId={value.userId}
      valueMobile={value.mobile}
      valueAddress={value.address}
      valueDetailAddress={value.detailAddress}
      _valueChangeHandler={_valueChangeHandler}
      userDelete={userDelete}
      userUpdate={userUpdate}
      searchPostHander={searchPostHander}
    />
  );
};

export default MyPageContainer;
