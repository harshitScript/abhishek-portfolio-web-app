// PAGE IS PRE-RENDERED ON THE SERVER FIRST AND DOCUMENT OBJECT IS NOT DEFINED THEIR.

import { createPortal } from "react-dom";
import ModalBox from "./ModalBox";
import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";

const Modal = () => {
  const [contentToDisplay, setContentToDisplay] = useState(<></>);
  useEffect(() => {
    setContentToDisplay(
      <>
        <ModalBox />
        <Backdrop />
      </>
    );
  }, [setContentToDisplay]);
  return contentToDisplay;
};
export default Modal;
