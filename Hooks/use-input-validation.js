import { useState } from "react";

const useInputValidation = (validityTester) => {
  const [enteredValue, setEnteredValue] = useState("");
  const valueIsvalid = validityTester(enteredValue);
  const [wasTouched, setWasTouched] = useState(false);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputWasTouchedHandler = () => {
    setWasTouched(true);
  };

  const displayError = wasTouched && !valueIsvalid;

  return {
    enteredValue,
    valueIsvalid,
    valueChangeHandler,
    inputWasTouchedHandler,
    displayError,
  };
};
export default useInputValidation;
