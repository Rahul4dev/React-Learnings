import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (!nameHasError && !lastNameHasError && !emailHasError) {
    formIsValid = true;
  }

  let errorText = '';

  if (emailHasError) {
    if (enteredEmail.trim() === '') {
      errorText = 'Email field should not be empty';
    } else if (!enteredEmail.includes('@')) {
      errorText = 'Email field should include @';
    }
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }

    console.log(
      enteredName + ' ' + enteredLastName + ' and the email is ' + enteredEmail
    );
    resetName();
    resetEmail();
    resetLastName();
  };

  const nameClass = nameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Name field should not be empty</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name field should not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">{errorText}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
