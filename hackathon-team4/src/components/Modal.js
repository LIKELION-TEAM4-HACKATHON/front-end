import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 6.787px 23.923px 0px rgba(0, 0, 0, 0.25);
  width: 600px;
  height: auto;
  padding: 40px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
