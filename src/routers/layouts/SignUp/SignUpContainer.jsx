import React, { useState, useEffect } from "react";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../../hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { CREATE_USER } from "./SignUpQueries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GET_USER_BY_USERID } from "./SignUpQueries";

const SignUpContainer = ({ history }) => {
  //   const [isIdCheck, setIsIdCheck] = useState(false);
  const [isDuplicateCheck, setIsDuplicateCheck] = useState(false);
  const [userSkip, setUserSkip] = useState(true);

  const newUserId = useInput("");
  const newUserPassword = useInput("");
  const passWordConfirm = useInput("");
  const newName = useInput("");
  const newEmail = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  const { data: userData, refetch: userRefetch } = useQuery(
    GET_USER_BY_USERID,
    {
      variables: {
        userId: newUserId.value,
      },
      skip: userSkip,
    }
  );

  const [createUserMutation] = useMutation(CREATE_USER);

  const createUserHandler = async () => {
    if (!newUserId.value || newUserId.value.trim() === "") {
      toast.info("아이디는 필수 입력사항 입니다.");

      return;
    }
    if (!isDuplicateCheck) {
      toast.error("아이디 중복확인을 해주세요.");
      return;
    }

    if (!newUserPassword.value || newUserPassword.value.trim() === "") {
      toast.info("비밀번호는 필수 입력사항 입니다.");

      return;
    }
    if (newUserPassword.value !== passWordConfirm.value) {
      toast.info("비밀번호가 일치하지 않습니다.");

      return;
    }
    if (!newName.value || newName.value.trim() === "") {
      toast.info("이름은 필수 입력사항 입니다.");

      return;
    }

    if (!newEmail.value || newEmail.value.trim() === "") {
      toast.info("이메일은 필수 입력사항 입니다.");

      return;
    }

    if (!newMobile.value || newMobile.value.trim() === "") {
      toast.info("전화번호는 필수 입력사항 입니다.");

      return;
    }

    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      toast.info("주소는 필수 입력사항 입니다.");

      return;
    }
    if (!newDetailAddress.value || newDetailAddress.value.trim() === "") {
      toast.info("상세주소는 필수 입력사항 입니다.");

      return;
    }

    const { data } = await createUserMutation({
      variables: {
        userId: newUserId.value,
        userPassword: newUserPassword.value,
        name: newName.value,
        email: newEmail.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value || `-`,
      },
    });

    if (data.createUser) {
      toast.success("회원가입이 완료되었습니다.");
      history.push("/signIn");
    } else {
      toast.error("처리 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const checkDuplicateHandler = () => {
    if (!newUserId.value || newUserId.value.trim() === "") {
      toast.error("중복 확인을 위해 아이디를 입력해주세요.");
      return;
    }

    setUserSkip(false);
  };

  useEffect(() => {
    if (userData) {
      if (userData.getUserByUserId.userData) {
        toast.error("이미 사용중인 아이디입니다.");
        setIsDuplicateCheck(false);
      } else {
        toast.success("사용 가능한 아이디입니다.");
        setIsDuplicateCheck(true);
      }

      setUserSkip(true);
    }
  }, [userData]);

  const searchPostHander = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
      },
    }).open();
  };
  return (
    <SignUpPresenter
      moveLinkHandler={moveLinkHandler}
      searchPostHander={searchPostHander}
      createUserHandler={createUserHandler}
      setIsDuplicateCheck={setIsDuplicateCheck}
      checkDuplicateHandler={checkDuplicateHandler}
      newUserId={newUserId}
      newUserPassword={newUserPassword}
      passWordConfirm={passWordConfirm}
      newName={newName}
      newEmail={newEmail}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
    />
  );
};
export default SignUpContainer;
