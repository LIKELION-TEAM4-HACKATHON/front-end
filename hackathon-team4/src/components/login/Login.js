import { useState } from "react";
import Modal from "../Modal";
import LoginModal from "./LoginModal";

const Login = ({ showLoginModal, closeLoginModal }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Modal showModal={showLoginModal} closeModal={closeLoginModal}>
      <LoginModal email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
    </Modal>
  );
};

export default Login;
