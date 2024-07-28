import { useState } from "react";
import Modal from "../Modal";
import JoinModal from "./JoinModal";

const Join = ({ showJoinModal, closeJoinModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <Modal showModal={showJoinModal} closeModal={closeJoinModal}>
      <JoinModal
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        name={name}
        setName={setName}
        nickname={nickname}
        setNickname={setNickname}
      />
    </Modal>
  );
};

export default Join;
