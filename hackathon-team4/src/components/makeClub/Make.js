import React from "react";
import Modal from "../Modal";
import MakeModal from "./MakeModal";

const Make = ({ showMakeModal, closeMakeModal, cultureId }) => {
  return (
    <Modal showModal={showMakeModal} closeModal={closeMakeModal}>
      <MakeModal closeMakeModal={closeMakeModal} cultureId={cultureId} />
    </Modal>
  );
};

export default Make;
