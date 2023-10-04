import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // we want a ref to connect with the input element so that we can get the input values after the form is submitted. In typescript we write useRef in different form as it require for which element we are using the useRef hook, so we need to specify the generic type <> where we define the ref as the inputElement and also the initial value of ref which can be null if we do not want to make any changes in initial type.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // For function connected ay event require specific type. React provide all the possible event types like for mouseEvent, formEvent etc. Here we use formEvent to submit the form.
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // since if we are connected with the input and we get the value form the event, we can be sure about the type of value we get from the input element. However, Typescript is not sure about the successful connection, so it require ? annotation after the current object where it seek the value, if present. However in the beginning we have already defined the type of value we get from the input element ie, either string or null. So if we are 100% sure about the connection,( as it do establish as we have written the code of submitHandler after the useRef hook which get parsed first, hence we get connected) we can replace the ? annotation with the ! annotation as it will specify the type of value we get from the input element i.g, only string.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
