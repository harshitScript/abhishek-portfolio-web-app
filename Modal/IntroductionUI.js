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
      <span className={styles.nameSpan}>Harshit Bhawsar</span>
      <hr />
      <div className={styles.detailsContainer}>
        • Date-of-birth : 06-06-2000.
        <br />
        • Email : www.harshitbhawsar777@gmail.com.
        <br />
        • Nationality : Indian.
        <br />
        • Languages Known : Hindi,English.
        <br />• Permanent Address : 20-Nai Aabadi, Mandsaur-458001 , Madhya
        Pradesh.
      </div>
    </>
  );
};
export default IntroductionUI;
