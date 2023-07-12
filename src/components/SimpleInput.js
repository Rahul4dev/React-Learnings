// how can we register/fetch user input in the system?

// There are two ways to register/fetch user inputs, one by listening to the input events and storing them in a local variable. Second, we can use useRef hook to fetch the user input when user is done with the input.

import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(false);
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const inputValueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    if (e.target.value.trim() !== '') {
      setEnteredValueIsValid(true);
      // alert('Please enter a valid value');
    }
  };

  const inputBlurHandler = (e) => {
    setEnteredValueTouched(true);
    if (enteredValue.trim() === '') {
      setEnteredValueIsValid(false);
      // alert('Please enter a valid value');
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    // we prevent the default behavior of all form submission(having button to submit the form) of sending the http request to the server, browser does this automatically. and reload the page or redirect to another page. which ultimately restart the entire application. Since we don't have any server. we do not want this. SO we disable by preventDefault method on the event object.

    setEnteredValueTouched(true);

    // Validations
    if (enteredValue.trim() === '') {
      setEnteredValueIsValid(false);
      // alert('Please enter a valid value');
      return;
    }

    setEnteredValueIsValid(true);
    console.log(enteredValue + ' by useState');
    const inputValue = nameInputRef.current.value;
    console.log(inputValue + ' by useRef');

    // to reset the state of the form
    setEnteredValue('');

    // but do not reset the state by useRef like
    // nameInputRef.current.value = '';
    //because it is not ideal to manipulate the DOM manually, React should do this automatically. which is only done in the useState hook.
  };

  const nameInputIsInvalid = enteredValueTouched && !enteredValueIsValid;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={inputValueChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredValue}
          // bind the value with the state: two way binding
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name field should not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
