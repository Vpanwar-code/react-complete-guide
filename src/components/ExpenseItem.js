import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
    const clickHandle = () => {
          console.log("Clicked !!!!");
    };
      

    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amount={props.amount}   title={props.title} />
       <button onClick={clickHandle}>Change Title</button>
        </Card>
        
       )
}

export default ExpenseItem;