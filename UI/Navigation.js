import styles from "./Navigation.module.scss";
import Image from "next/image";
import logoImage from "../Assets/logo.jpeg";
import Head from "next/head";

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
          <span className={styles.headerSpan}>Harshit Bhawsar</span>
        </div>
      </div>
    </>
  );
};
export default Navigation;
