import styles from "./TextArea.module.scss";
import { BiErrorCircle } from "react-icons/bi";
import { TiThumbsOk } from "react-icons/ti";
import { VscLoading } from "react-icons/vsc";

const TextArea = ({
  id,
  rows,
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
      <textarea
      className={styles.textarea}
        rows={rows}
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
export default TextArea;
