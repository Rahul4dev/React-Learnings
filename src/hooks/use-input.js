import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFieldTouched, setIsFieldTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = isFieldTouched && !valueIsValid;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsFieldTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsFieldTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
