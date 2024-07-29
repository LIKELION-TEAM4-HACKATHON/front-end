import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

const Btn = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.disable ? "#fff" : "#e02525")};
  color: ${(props) => (props.disable ? "#e02525" : "#fff")};
  border: none;
  border-radius: 5px;
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

  const logout = async () => {
    try {
      const response = await api.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("로그아웃 성공:", response.data);
    } catch (error) {
      console.error("로그아웃 실패:", error.response || error);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setEmail("");
      setPw("");
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
    }
  };

  const onClickBtn = async () => {
    try {
      const response = await api.post("/auth/login", { email, password: pw });
      if (response.data) {
        console.log("로그인 성공:", response.data);
        localStorage.setItem("accessToken", response.data.accessToken.token);
        localStorage.setItem("refreshToken", response.data.refreshToken.token);
      }
    } catch (error) {
      console.error("로그인 실패:", error.response || error);
      if (error.response && error.response.status === 401) {
        await logout();
      }
    }
  };

  return (
    <div>
      <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
        로그인
      </Btn>
    </div>
  );
};

export default LoginBtn;
