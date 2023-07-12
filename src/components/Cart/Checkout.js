import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsInvalid = isEmpty(enteredName);
    const enteredStreetIsInvalid = isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsInvalid = isEmpty(enteredCity);

    setFormInputsValidity({
      name: !enteredNameIsInvalid,
      street: !enteredStreetIsInvalid,
      postalCode: enteredPostalIsValid,
      city: !enteredCityIsInvalid,
    });

    const formIsValid =
      !enteredNameIsInvalid &&
      !enteredStreetIsInvalid &&
      enteredPostalIsValid &&
      !enteredCityIsInvalid;

    if (!formIsValid) {
      return;
    }
    console.log(formIsValid);
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameControlStyles = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`;
  const streetControlStyles = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`;
  const postalControlStyles = `${styles.control} ${
    formInputsValidity.postalCode ? '' : styles.invalid
  }`;
  const cityControlStyles = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlStyles}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlStyles}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalControlStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && <p>Please enter a valid postal</p>}
      </div>
      <div className={cityControlStyles}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
