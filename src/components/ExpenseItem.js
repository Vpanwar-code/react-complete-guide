import React , {useState} from 'react';
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {

       const [title,setTitle] = useState(props.title);

    const clickHandle = () => {
           setTitle("updated!");
          console.log("Clicked !!!!");
    };
      

    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <div className="expense-item__description">
       <h2 className="expense-item h2">{title}</h2>
       </div>
       <ExpenseDetails amount={props.amount}    />
       <button onClick={clickHandle}>Change Title</button>
        </Card>
        
       )
}

export default ExpenseItem;