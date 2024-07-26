import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";
import LoginBtn from "./LoginBtn";

const LoginBox = styled.div`
  .loginTitle {
    color: #000;
    text-align: center;
    font-family: GmarketSans;
    font-size: 22.929px;
    font-weight: 300;
  }
  .toJoin {
    color: #7c7c7c;
    font-family: KoddiUDOnGothic-Bold;
    font-size: 15px;
    margin-top: 30px;
    height: 42px;
  }
`;

const LoginModal = ({ email, setEmail, pw, setPw }) => (
  <LoginBox>
    <div className="loginTitle">
      새로운 경험과 만남으로 가득찰
      <br />
      당신의 일상을 위하여
    </div>
    <LoginInput email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
    <LoginBtn email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
    <div className="toJoin">
      <p>아직 회원이 아니신가요?</p>
    </div>
  </LoginBox>
);

export default LoginModal;
