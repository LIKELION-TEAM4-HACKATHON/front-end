import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Btn = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.disable ? "#fff" : "#e02525")};
  color: ${(props) => (props.disable ? "#e02525" : "#fff")};
  border: none;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: KoddiUDOnGothic-Regular;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.2s;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
`;

const LoginBtn = ({ email, pw, setEmail, setPw }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);

  const onClickBtn = async () => {};

  return (
    <div>
      <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
        로그인
      </Btn>
    </div>
  );
};

export default LoginBtn;
