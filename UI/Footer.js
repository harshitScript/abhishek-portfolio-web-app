import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={`${props.className} ${styles.footer}`}>
      @2021 Abhishek Pacchisiya inc.
    </div>
  );
};
export default Footer;
