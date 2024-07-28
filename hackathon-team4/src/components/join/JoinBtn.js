import styled from "styled-components";
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

const api = axios.create({
  baseURL: "/api",
});

const JoinBtn = ({
  email,
  password,
  confirmPassword,
  name,
  nickname,
  setEmail,
  setPassword,
  setConfirmPassword,
  setName,
  setNickname,
}) => {
  const isDisabled =
    !email ||
    !password ||
    !confirmPassword ||
    !name ||
    !nickname ||
    password !== confirmPassword;

  const onClickBtn = async () => {
    if (isDisabled) return;

    try {
      const response = await api.post("/auth/signup", {
        email,
        password,
        name,
        nickname,
      });
      console.log("회원가입 성공:", response.data);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setNickname("");
    } catch (error) {
      console.error("회원가입 실패:", error.response || error);
    }
  };

  return (
    <Btn onClick={onClickBtn} disable={isDisabled}>
      가입하기
    </Btn>
  );
};

export default JoinBtn;
