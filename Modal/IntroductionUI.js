import styles from "./IntroductionUI.module.scss";
import profileImage from "../Assets/profile.jpeg";
import Image from "next/image";

const IntroductionUI = () => {
  return (
    <>
      <span className={styles.introductionHeaderSpan}>INTRODUCTION</span>
      <hr />
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={profileImage}
          alt="my image"
          quality="100"
          width="120"
          height="120"
        />
      </div>
      <span className={styles.nameSpan}>Abhishek Pachchisiya</span>
      <hr />
      <div className={styles.detailsContainer}>
        • Date-of-birth : 22-07-1999.
        <br />
        • Email : Pachchisiyaabhishek@gmail.com
        <br />
        • Nationality : Indian.
        <br />
        • Languages Known : Hindi,English.
        <br />• Permanent Address : Ganesh nagar ,  khandva naka , indore (m. p).
      </div>
    </>
  );
};
export default IntroductionUI;
