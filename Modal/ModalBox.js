import styles from "./ModalBox.module.scss";
import { useContext } from "react";
import { ModalContext } from "../Context";
import { TiCancel } from "react-icons/ti";
import IntroductionUI from "./IntroductionUI";
import EducationUI from "./EducationUI";
import SkillUI from "./SkillUI";
import Projects from "./Projects";
import MoreUI from "./MoreUI";

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
    case "SKILL":
      contentToDisplay = <SkillUI />;
      break;
    case "PROJECTS":
      contentToDisplay = <Projects />;
      break;
    case "MORE":
      contentToDisplay = <MoreUI />;
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
