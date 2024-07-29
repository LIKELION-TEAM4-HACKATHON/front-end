import { useState } from "react";
import Modal from "../Modal";
import LoginModal from "./LoginModal";

const Login = ({ showLoginModal, closeLoginModal, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  return (
    <Modal showModal={showLoginModal} closeModal={closeLoginModal}>
      <LoginModal
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        onLoginSuccess={handleLoginSuccess}
      />
    </Modal>
  );
};

export default Login;
