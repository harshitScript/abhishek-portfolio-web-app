import styles from "./Navigation.module.scss";
import Image from "next/image";
import logoImage from "../Assets/logo.jpeg";

const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.header}>
          <Image
            className={styles.headerImage}
            src={logoImage}
            alt="logo"
            width="40%"
            height="40%"
          />
          <span className={styles.headerSpan}>Abhishek Pachchisiya</span>
        </div>
      </div>
    </>
  );
};
export default Navigation;
