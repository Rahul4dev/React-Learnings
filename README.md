# useState function and Management of Changing State
### How we can manage Change in the DOM via Events in React...

  - We use useState of react, it is a Hook which have the control of the data which is going to be change in the course of events.
  - useState comes with the React, it always gives an array of two values, viz., an inital variable for the inital value which is going to be stored in the useState parameter. second value is a fucntion to set the final or changes value after the event occur.
  
  ``` javascript
    import React, {useState} from 'react';  
    
    const UserForm = () => {
      const [enteredName, setEnteredName] = useState('');
      
// useState will save the string as a value because it gets string to store from the JSX. 
// Event it get number or other data type, but it always save it as a string
    
    
    
    // in JSX:
    return (
       <form> 
          <div className='form-controls'>
            <label>Name</label>
            <input type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div className='from__actions'>
            <button type='submit'>Add Name</button>
        </div>
       < /form>       
    )
    
 ```
    
  - Here: input will take values from the user and we have added eventhandler "onChange" in it to track the changes in the input. 
  - value prop in input field, makes it two way bind as it can now have both value i.e, the inital value and the changed value. Hence we can get the input and changed value in form submission. Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.
  - Hence we add an event listner on form not on the button for submission.
   like <from onSbumit={submitHandler} >

### Parameter for the eventHandlers
  - they take function as a parameter.
  - in the function, if any data needs to be change with the event, initiated here.
  
  ```javascript
    
    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);   
    }
    
    function submitHandler(e) {
        e.preventDefault();
        
        const newData = { name: enteredName };
    }
  ```
  
   - We can use both type of function declaration. 
   - setState (here used as setEnteredName) which are second value comes out from the useState is used inside the eventHandler as here it gives its changed value.
   - However it does not change the value of variable right away as it only schedule the change. Every change get scheduled by the React and every change will have its own state.
   - this is why we should use anonymous function as output return from the setState function so that it always gives the latest value. 
    so, setEnteredName((prevState) => {
          return {... prevState, enteredName: e.target.value}
     })
  
   - Here, prevState preserve the previous value of the input which we are not going to change in this setState eventHandler nested function. However here we only have name field, but if we have other inputs which are going to be changed as well but on other events we have to preserve those input data for the setState.
    
    
### What parameter we can pass to the useState?
  - since, useState takes only inital value of that input/ variable which it going to change after specified event by the setState.
  - We can use multiple useState instance slices for those variables which are going to be changed. but w can also merge them into one useState and hence we will be required with the prevState variable for the setState to preserve the data of other variables.
  - For eg:
  
  ```javascript
  const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredDesignation: '',
        enteredBranch: '',
    })
  
  // inside eventHandler
  
  const designationChangeHandler = (e) => {
      setUserInput({
          ...userInput,   // will preserve the values of name and Branch which will be handled in their respective eventhandlers.
          enteredDesignation: e.target.value,
       });
  };


