import { useState } from "react";
import { ModalContext } from "./index";

const ModalStoreProvider = (props) => {
  const [displayModal, setDisplayModal] = useState({
    display: false,
    identifier: "",
  });

  const modalDisplayHandler = (passedIdentifier) => {
    setDisplayModal({
      display: true,
      identifier: passedIdentifier,
    });
  };

  const modalHideHandler = () => {
    setDisplayModal({ display: false, identifier: "" });
  };

  return (
    <ModalContext.Provider
      value={{
        displayModal: displayModal,
        modalDisplayHandler: modalDisplayHandler,
        modalHideHandler: modalHideHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalStoreProvider;
