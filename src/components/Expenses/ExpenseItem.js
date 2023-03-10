import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] =  useState(props.title);  // react Hooks for state change
  // useState always returns a return an array with two elements, first the value which will going to change and second the changedValue. Hence following the convention, we name them accordingly. So here we got he title as value which will we want to change after the click event. So first key will be the title and second will be the function which set the new title after the click event, hence named setTitle.

  // useState will contain the initial value which we give name of the first key. So even if we do not get any prop from the component, we can set initial and final state by assigning the values. How? initiall value will be stored by the useState and final value will be stored in the setState function. as  setState(new value), which will be called inside the handler function.
 

  const clickHandler = () => {
    setTitle('Updated Title!!');    
    // this function will be called when the user clicks, React will again will re-evaluate the title after the click event. Since the new value will not change right away. This function schedules the value/state update for the next. However it is just like assigning a new value to the title but it does not like using equal signs. This is assigning a new instance of the title to the current value. So we can use Const keyword for the title even if the value changes after the click event.
  };

  // Since we have used ExpenseItem four times, and this state is create for all of them, but we can change the state of ExpenseItem individually by clicking on the ExpenseItem button. It will not change the state for other items. That means, state are separated on a per component instance basis. Every component have their own state instance.

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
