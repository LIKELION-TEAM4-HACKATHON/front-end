import { useState } from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginBtn from "./LoginBtn";
import JoinModal from "../join/JoinModal";
import Modal from "../Modal";

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
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      width: 266px;
      height: 42px;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(
        90deg,
        #e02525 0%,
        #7a1414 25%,
        #e02525 50%,
        #ff9494 75%,
        #e02525 100%
      );
      border: none;
      border-radius: 5px;
      box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.5);
      color: #fff;
      font-family: KoddiUDOnGothic-Bold;
      font-size: 21px;
      cursor: pointer;
    }
  }
`;

const LoginModal = ({ email, setEmail, pw, setPw, onLoginSuccess }) => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div>
      <LoginBox>
        <div className="loginTitle">
          새로운 경험과 만남으로 가득찰
          <br />
          당신의 일상을 위하여
        </div>
        <LoginInput email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
        <LoginBtn
          email={email}
          setEmail={setEmail}
          pw={pw}
          setPw={setPw}
          onSuccess={onLoginSuccess}
        />
        <div className="toJoin">
          <p>아직 회원이 아니신가요?</p>
          <button onClick={handleOpenJoinModal}>회원가입</button>
        </div>
      </LoginBox>
      {isJoinModalOpen && (
        <Modal showModal={isJoinModalOpen} closeModal={handleCloseJoinModal}>
          <JoinModal
            email=""
            setEmail={() => {}}
            password=""
            setPassword={() => {}}
            confirmPassword=""
            setConfirmPassword={() => {}}
            name=""
            setName={() => {}}
            nickname=""
            setNickname={() => {}}
            instagram=""
            setInstagram={() => {}}
            facebook=""
            setFacebook={() => {}}
            selectedGender=""
            setSelectedGender={() => {}}
            selectedAge=""
            setSelectedAge={() => {}}
            selectedHashtags={[]}
            setSelectedHashtags={() => {}}
            onClose={handleCloseJoinModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default LoginModal;
