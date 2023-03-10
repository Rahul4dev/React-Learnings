import React, {useState} from 'react'


import './ExpenseForm.css';


const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

   // useState will save the string, because event target value will also be the string. React will store it as it is.
 // we can use single UseState for this also like: 
//    const [userInput, setUserInput] = useState({
//        enteredTitle: '',
//         enteredDate: '',
//         enteredAmount: '',
//    });

// and this state manager will be set in the handlers like: 
    // const titleChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,  // to preserve the original state of other handlers
        //     enteredTitle: e.target.value,
        // });
        // and similarly for other handlers. However it will cause problems with the state update as it depend on the previous state which is not changing instantly but scheduled by the react. So we have to use function form for this change like: 

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value};
        // this will ensure that whenever the user changes the  input it will update with the latest value.
        // })
   // }
   
   
    function titleChangeHandler(e) {
        setEnteredTitle(e.target.value);
    }
    
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    function submitHandler(e) {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        // then we clear the inputs
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.1" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2022-01-01" max="2023-04-01" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm

// For submitting the entered value: we used onSubmit function not on the button, but on the form which have the in-built char to submit the data. Hence we can submit the entered inputs and use it to create new expense.

// By using Value prop in input fields, makes them two way bindings, as they are now responsive to the change and the input value of the user also show previous values stored. That means using two way bindings, we can get the input and change it in form submissions. useful for Forms only.