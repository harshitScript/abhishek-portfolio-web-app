import styles from "./SingleProjectBlock.module.scss";
import Image from "next/image";
import Button from "../UI/Button";

const SingleProjectBlock = ({
  imgSrc1,
  imgSrc2,
  title,
  navigationLink,
  description,
}) => {
  const projectOpenHandler = () => {
    window.open(navigationLink);
  };
  return (
    <div className={styles.singleProjectBlock}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer1}>
          <Image
            src={imgSrc1}
            alt="project-img1"
            width="180vw"
            height="120vh"
            quality="100"
            className={styles.image1}
            loading="lazy"
          />
        </div>

        <div className={styles.imageContainer2}>
          <Image
            src={imgSrc2}
            alt="project-img2"
            width="180vw"
            height="120vh"
            quality="100"
            className={styles.image2}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.titleAndButtonContainer}>
        <span className={styles.titleSpan}>{title}</span>
        <Button onClick={projectOpenHandler}>Visit</Button>
      </div>

      <div className={styles.descriptionSpan}>{description}</div>
      <hr />
    </div>
  );
};
export default SingleProjectBlock;
