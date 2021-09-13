import useInputValidation from "../../Hooks/use-input-validation";
//import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./EntryForm.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const namePattern = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})?$/;
const EntryForm = () => {
  const router = useRouter();
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
      setError(false);

      axios
        .post("/api/store-visitor-data", {
          visiterName: enteredName,
        })
        .then((responseObj) => {
          router.replace("/main-page");
        })
        .catch((error) => {
          setLoading(false);
          alert("Unknown error occured ! try again.");
        });
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.formWidth}>
      <Input
        type="text"
        placeholder="Enter your name"
        displayError={showNameError}
        onChange={nameChangeHandler}
        onBlur={nameWasTouchedHandler}
        errorMsg="name must contain 3+ characters and no extreme spaces"
        displayValidText={nameIsValid}
        validText="All set ! hit enter."
        loadingCircleDisplay={loading}
      />
      {/*<Button>Enter</Button>*/}
    </form>
  );
};
export default EntryForm;
