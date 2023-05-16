import ExpenseItem from './ExpenseItem';
import React , {useState} from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) =>{
   const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
          setFilteredYear(selectedYear);
    }



return (
    <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.data.map((item) => (
        <ExpenseItem 
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        LocationOfExpenditure={item.LocationOfExpenditure}
        ></ExpenseItem>
      ))} 
        </Card>
       
    </div>
)
}

export default Expenses;