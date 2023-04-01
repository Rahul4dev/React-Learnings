import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => {
    setIsFormOpen(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormOpen(false);
  };

  const StoppingFormEdit = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && (
        <div className="new-expense__actions">
          <button onClick={openForm}>Add Expense</button>
        </div>
      )}
      {isFormOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditing={StoppingFormEdit}
        />
      )}
    </div>
  );
};

export default NewExpense;
