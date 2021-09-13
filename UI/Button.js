import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div className={styles.formGroup}>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
