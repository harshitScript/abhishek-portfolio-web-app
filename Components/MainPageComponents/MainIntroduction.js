import styles from "./MainIntroduction.module.scss";
import profileImg from "../../Assets/profile.jpeg";
// TO DISPLAY IMAGES IN NEST JS ONLY NEXT IMAGE TAG WILL WORK.
import Image from "next/image";
import { BsCodeSlash } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

const MainIntroduction = () => {
  return (
    <div className={styles.mainIntroDiv}>
      <div className={styles.imgContainer}>
        <Image
          src={profileImg}
          width="120vh"
          height="120vh"
          quality='100'
          alt="profile-image"
          className={styles.imgAspects}
        />
      </div>

      <span className={styles.nameSpan}>
        HARSHIT&nbsp;
        <FaLaptopCode />
        &nbsp;BHAWSAR
      </span>

      <span className={styles.lilIntroSpan}>
        Coder&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creator
      </span>

      <br />
      <hr />
    </div>
  );
};
export default MainIntroduction;
