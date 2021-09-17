import styles from "./ContactMeForm.module.scss";
import Input from "../../UI/Input";
import useInputValidation from "../../Hooks/use-input-validation";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";
import axios from "axios";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";
import ContactMeFormResponse from "./ContactMeFormResponse";

const namePattern = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})?$/;
const contactPattern = /^[0-9]{10,11}$/;
const emailPattern = /^(www.)?[a-zA-Z0-9.-]{0,}@[a-z]{3,6}.(com|co|org|in)$/;
const commentPattern = /^[\s\S]{10,}$/;

const ContactMeForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [displayFormResponseObj, setDisplayFormResponseObj] = useState({
    displayFormResponse: true,
    responseId: "",
  });
  const {
    enteredValue: enteredName,
    valueIsvalid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputWasTouchedHandler: nameWasTouchedHandler,
    displayError: displayNameError,
  } = useInputValidation((value) => namePattern.test(value));
  const {
    enteredValue: enteredContact,
    valueIsvalid: contactIsValid,
    valueChangeHandler: contactChangeHandler,
    inputWasTouchedHandler: contactWasTouchedHandler,
    displayError: displayContactError,
  } = useInputValidation((value) => contactPattern.test(value));
  const {
    enteredValue: enteredEmail,
    valueIsvalid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputWasTouchedHandler: emailWasTouchedHandler,
    displayError: displayEmailError,
  } = useInputValidation((value) => emailPattern.test(value));
  const {
    enteredValue: enteredComment,
    valueIsvalid: commentIsValid,
    valueChangeHandler: commentChangeHandler,
    inputWasTouchedHandler: commentWasTouchedHandler,
    displayError: displayCommentError,
  } = useInputValidation((value) => commentPattern.test(value));

  const formIsValid =
    nameIsValid && contactIsValid && emailIsValid && commentIsValid;

  const contactRequestSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    axios
      .post("/api/contact-me-request-handler", {
        visitorName: enteredName,
        contact: enteredContact,
        email: enteredEmail,
        comment: enteredComment,
      })
      .then((responseObj) => {
        setLoading(false);
        setError(false);
        setDisplayFormResponseObj({
          displayFormResponse: true,
          responseId: responseObj.data.id,
        });
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

  let buttonText = "Request";
  if (loading) {
    buttonText = (
      <span className={styles.loadingCircleSpan}>
        <VscLoading />
      </span>
    );
  }
  if (error) {
    buttonText = "Try again";
  }

  return (
    <div className={styles.contactMeFormDiv}>
      <span className={styles.contactMeHeader}>Contact me</span>
      {!displayFormResponseObj.displayFormResponse && (
        <form onSubmit={contactRequestSubmitHandler}>
          <Input
            type="text"
            onChange={nameChangeHandler}
            onBlur={nameWasTouchedHandler}
            displayError={displayNameError}
            displayValidText={nameIsValid}
            validText="go on !"
            errorMsg="name must contain 3+ characters and no extreme spaces"
            id="VSTR_NAME"
            placeholder="enter your name"
            required={true}
          />
          <Input
            type="text"
            onChange={contactChangeHandler}
            onBlur={contactWasTouchedHandler}
            displayError={displayContactError}
            displayValidText={contactIsValid}
            validText="go on !"
            errorMsg="Not a valid contact(check extreme spaces)"
            id="VSTR_CONTACT"
            placeholder="enter your contact"
            required={true}
          />
          <Input
            type="text"
            onChange={emailChangeHandler}
            onBlur={emailWasTouchedHandler}
            displayError={displayEmailError}
            displayValidText={emailIsValid}
            validText="go on !"
            errorMsg="not a valid email(check extreme spaces)"
            id="VSTR_EMAIL"
            placeholder="enter your email"
            required={true}
          />
          <TextArea
            rows="3"
            onChange={commentChangeHandler}
            onBlur={commentWasTouchedHandler}
            displayError={displayCommentError}
            displayValidText={commentIsValid}
            validText="go on !"
            errorMsg="not a valid comment(10+ characters)"
            id="VSTR_EMAIL"
            placeholder="enter your comment"
            required={true}
          />
          {formIsValid && <Button>{buttonText}</Button>}
        </form>
      )}
      {displayFormResponseObj.displayFormResponse && (
        <ContactMeFormResponse requestId={displayFormResponseObj.responseId} />
      )}
    </div>
  );
};
export default ContactMeForm;
