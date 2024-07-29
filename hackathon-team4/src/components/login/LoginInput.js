import styled from "styled-components";
import { useState } from "react";

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

  .email {
    margin-bottom: 15px;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "red" : "#dfdfdf")};
    color: ${({ error }) => (error ? "red" : "#7c7c7c")};
  }

  .pw {
    margin-bottom: 60px;
  }

  .error {
    font-size: 14px;
    color: red;
    margin-top: 4px;
  }
`;

const LoginInput = ({ email, pw, setEmail, setPw }) => {
  const [emailError, setEmailError] = useState(false);

  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail === "") {
      setEmailError(false);
    } else if (!emailRegex.test(newEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <InputBox error={emailError}>
      <input
        type="text"
        className="email"
        placeholder="이메일 입력"
        onChange={onChangeEmail}
        value={email}
      />
      <input
        type="password"
        className="pw"
        placeholder="비밀번호 입력"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        value={pw}
      />
    </InputBox>
  );
};

export default LoginInput;
