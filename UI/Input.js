import styles from "./Input.module.scss";
import { BiErrorCircle } from "react-icons/bi";
import { TiThumbsOk } from "react-icons/ti";
import { VscLoading } from "react-icons/vsc";

const Input = ({
  id,
  type,
  onChange,
  label,
  placeholder,
  displayError,
  errorMsg,
  required,
  onBlur,
  displayValidText,
  validText,
  loadingCircleDisplay,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onBlur={onBlur}
      />
      {loadingCircleDisplay && (
        <span className={styles.loadingCircleSpan}>
          <VscLoading />
        </span>
      )}
      {displayError && (
        <span className={styles.errorSpan}>
          <BiErrorCircle />
          &nbsp;
          {errorMsg}
        </span>
      )}
      {displayValidText && (
        <span className={styles.validText}>
          <TiThumbsOk /> &nbsp;{validText}
        </span>
      )}
    </div>
  );
};
export default Input;
