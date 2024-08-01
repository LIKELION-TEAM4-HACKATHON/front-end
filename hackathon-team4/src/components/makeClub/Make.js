import { useState } from "react";
import Modal from "../Modal";
import MakeModal from "./MakeModal";

const Make = ({ showMakeModal, closeMakeModal }) => {
  return (
    <Modal showModal={showMakeModal} closeModal={closeMakeModal}>
      <MakeModal closeMakeModal={closeMakeModal} />
    </Modal>
  );
};

export default Make;
