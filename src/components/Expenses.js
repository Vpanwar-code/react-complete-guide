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

    const filteredExpenses= props.data.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    }

    );


return (
    <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpenses.length > 0 && 
        filteredExpenses.map((item) => (
            <ExpenseItem 
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            LocationOfExpenditure={item.LocationOfExpenditure}
            />
          ))
        }
        
        </Card>
       
    </div>
)
}

export default Expenses;