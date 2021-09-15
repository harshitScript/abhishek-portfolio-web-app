import styles from "./PortfolioIconAndCaption.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../Context";
import Image from "next/image";

const PortfolioIconAndCaption = ({ identifier, imgSrc, caption }) => {
  const { modalDisplayHandler } = useContext(ModalContext);
  return (
    <>
      <div className={styles.imageContainerDiv}>
        <Image
          src={imgSrc}
          className={styles.iconImages}
          alt="image"
          width="100%"
          height="100%"
          loading="lazy"
          onClick={modalDisplayHandler.bind(null, identifier)}
        />
      </div>
      <span className={styles.captionSpan}>{caption}</span>
    </>
  );
};
export default PortfolioIconAndCaption;
