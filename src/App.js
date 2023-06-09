import ExpenseItem from './components/ExpenseItem';
import React ,{useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';



  const dummyData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : 'dehradun',
    },
    { id: 'e2',  
    title: 'New TV',
     amount: 799.49,
      date: new Date(2021, 2, 12)
     },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure : 'gurugram',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : 'delhi',
    },
  ];

  const App = () =>{
    const[expenses,setExpenses]=useState(dummyData);

    const addExpenseHandler = expense =>{
     setExpenses([expense,...expenses]);
    }
    
      return (
        <div>
          <h2>Let's get started!</h2>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses data={expenses}/>
          </div>
      );
  }
 
  export default App;
     
      
      {/* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      LocationOfExpenditure={expenses[3].LocationOfExpenditure}
      ></ExpenseItem> */}
  



