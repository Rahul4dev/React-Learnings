import React from 'react';
import useForm from '../../hooks/use-form';

import { signupForm } from './FromFieldConfig';

import './SignupForm.css';
import './input.css';

export default function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <form className="signupFrom">
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}
