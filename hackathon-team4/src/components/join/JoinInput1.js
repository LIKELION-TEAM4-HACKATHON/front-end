import { useState, useEffect } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  margin-top: 30px;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 21px;

  input {
    color: #7c7c7c;
    width: 100%;
    height: 60px;
    background: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 14.7px 0px rgba(0, 0, 0, 0.1) inset;
    display: block;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    font-size: 21px;
    font-family: KoddiUDOnGothic-Regular;
    &::placeholder {
      font-size: 21px;
      font-family: KoddiUDOnGothic-Regular;
    }
    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }

  .inputTitle {
    margin-bottom: 11px;
    font-size: 21px;
  }

  .rule {
    text-align: right;
    font-size: 15px;
    margin-bottom: 11px;
    color: #7c7c7c;
  }

  .inputContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .email {
    margin-bottom: 18px;
    border: 1px solid;
    border-color: ${({ emailError }) => (emailError ? "red" : "#dfdfdf")};
    color: ${({ emailError }) => (emailError ? "red" : "#7c7c7c")};
  }

  .pw {
    margin-bottom: 15px;
    border: 1px solid;
    border-color: ${({ passwordError }) => (passwordError ? "red" : "#dfdfdf")};
    color: ${({ passwordError }) => (passwordError ? "red" : "#7c7c7c")};
  }

  .confirmPw {
    border: 1px solid;
    border-color: ${({ confirmPasswordError }) =>
      confirmPasswordError ? "red" : "#dfdfdf"};
    color: ${({ confirmPasswordError }) =>
      confirmPasswordError ? "red" : "#7c7c7c"};
  }

  .error {
    font-size: 14px;
    margin-top: 4px;
    color: ${({ showError }) => (showError ? "red" : "transparent")};
    display: ${({ showError }) => (showError ? "block" : "none")};
  }
`;

const JoinInput1 = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onValidityChange,
}) => {
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState(true);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const isEmailError = !emailRegex.test(email);
    const isPasswordError =
      password.length < 8 || !passwordRegex.test(password);
    const isConfirmPasswordError =
      confirmPassword === "" || password === "" || confirmPassword !== password;

    setEmailError(isEmailError);
    setPasswordError(isPasswordError);
    setConfirmPasswordError(isConfirmPasswordError);

    const isFormValid =
      !isEmailError &&
      !isPasswordError &&
      !isConfirmPasswordError &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "";

    onValidityChange(isFormValid);
  }, [email, password, confirmPassword, onValidityChange]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <InputBox
      emailError={emailError}
      passwordError={passwordError}
      confirmPasswordError={confirmPasswordError}
      showError={confirmPasswordError}
    >
      <div className="inputTitle">이메일을 입력해 주세요.</div>
      <input
        type="text"
        className="email"
        placeholder="이메일 입력"
        onChange={onChangeEmail}
        value={email}
      />
      <div className="inputContainer">
        <span className="inputTitle">비밀번호를 입력해 주세요.</span>
        <span className="rule">조건: 8자 이상 / 영문+숫자+특수문자 조합</span>
      </div>
      <input
        type="password"
        className="pw"
        placeholder="비밀번호 입력"
        onChange={onChangePassword}
        value={password}
      />
      <input
        type="password"
        className="confirmPw"
        placeholder="비밀번호 확인"
        onChange={onChangeConfirmPassword}
        value={confirmPassword}
      />
      <p className="error" showError={confirmPasswordError}>
        비밀번호가 일치하지 않습니다.
      </p>
    </InputBox>
  );
};

export default JoinInput1;
