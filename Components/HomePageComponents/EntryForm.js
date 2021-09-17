import useInputValidation from "../../Hooks/use-input-validation";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./EntryForm.module.scss";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthToken } from "../../Context";

const namePattern = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})?$/;
const EntryForm = () => {
  const authTokenCtx = useContext(AuthToken);
  const [loading, setLoading] = useState(false);
  const {
    enteredValue: enteredName,
    valueIsvalid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputWasTouchedHandler: nameWasTouchedHandler,
    displayError: showNameError,
  } = useInputValidation((value) => namePattern.test(value));

  const submitHandler = (e) => {
    e.preventDefault();

    if (nameIsValid) {
      //THE URL PATH SHOULD PASSED WHILE USING API ROUTES.
      setLoading(true);
      axios
        .post("/api/store-visitor-data", {
          visiterName: enteredName,
        })
        .then((responseObj) => {
          authTokenCtx.authTokenProvider();
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.formWidthAndAnimation}>
      <Input
        type="text"
        placeholder="Enter full name"
        displayError={showNameError}
        onChange={nameChangeHandler}
        onBlur={nameWasTouchedHandler}
        errorMsg="name must contain 3+ characters and no extreme spaces"
        displayValidText={nameIsValid}
        validText="hit enter when done."
        loadingCircleDisplay={loading}
      />
      {nameIsValid && <Button className={styles.displayButton}>Enter</Button>}
    </form>
  );
};
export default EntryForm;
