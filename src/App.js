import React from 'react';

import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from "./components/ExpenseItem";
const App = () => {
  const expenses = [
    {
      id: "e3",
      title: "Car Insurance",
      amount: 443.54,
      date: new Date(2023, 3, 23),
    },
    {
      id: "e5",
      title: "Market Expense",
      amount: 120.52,
      date: new Date(2022, 4, 4),
    },
    {
      id: "e6",
      title: "Monthly Bills",
      amount: 1000,
      date: new Date(2023, 3, 1),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },

    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get Started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
