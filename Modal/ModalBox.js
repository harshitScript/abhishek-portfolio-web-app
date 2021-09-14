import styles from "./ModalBox.module.scss";
import { useContext } from "react";
import { ModalContext } from "../Context";
import { TiCancel } from "react-icons/ti";
import IntroductionUI from "./IntroductionUI";
import EducationUI from "./EducationUI";

const ModalBox = () => {
  const modalCtx = useContext(ModalContext);
  const { identifier } = modalCtx.displayModal;
  const { modalHideHandler } = modalCtx;

  let contentToDisplay;
  switch (identifier) {
    case "INTRODUCTION":
      contentToDisplay = <IntroductionUI />;
      break;
    case "EDUCATION":
      contentToDisplay = <EducationUI />;
      break;
  }

  return (
    <div className={styles.modalBox}>
      <div>
        <TiCancel
          className={styles.hideModalButton}
          onClick={modalHideHandler}
        />
      </div>
      {contentToDisplay}
    </div>
  );
};
export default ModalBox;
