import styles from "./ModalBox.module.scss";
import { useContext } from "react";
import { ModalContext } from "../Context";
import { TiCancel } from "react-icons/ti";

const ModalBox = () => {
  const modalCtx = useContext(ModalContext);
  const { identifier } = modalCtx.displayModal;
  const { modalHideHandler } = modalCtx;

  return (
    <div className={styles.modalBox}>
      <div>
        <TiCancel className={styles.hideModalButton} onClick={modalHideHandler} />
      </div>
    </div>
  );
};
export default ModalBox;
