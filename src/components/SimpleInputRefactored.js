import { useState } from 'react';

const SimpleInputRefactored = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameFieldTouched, setNameFieldTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailFieldTouched, setEmailFieldTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = nameFieldTouched && !nameIsValid;

  const emailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = emailFieldTouched && !emailIsValid;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const inputNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const inputEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameFieldTouched(true);
  };
  const emailBlurHandler = (e) => {
    setEmailFieldTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setNameFieldTouched(true);
    setEmailFieldTouched(true);

    if (!nameIsValid && !emailIsValid) {
      return;
    }

    console.log(enteredName + ' by useState' + enteredEmail);

    setEnteredName('');
    setEnteredEmail('');
    setNameFieldTouched(false);
    setEmailFieldTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name field should not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email field should not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputRefactored;
