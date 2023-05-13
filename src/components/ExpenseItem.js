import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
      

    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amount={props.amount}   title={props.title} />
        </Card>
       )
}

export default ExpenseItem;