import useInput from '../hooks/use-input';

const SimpleInputWithHook = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (!nameInputHasError && !emailInputHasError) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      return;
    }

    console.log(enteredName + ' by useState' + enteredEmail);
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control ';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control ';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name field should not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email field should not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputWithHook;
