import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={`${props.className} ${styles.footer}`}>
      @2021 Harshit Bhawsar inc.
    </div>
  );
};
export default Footer;
