import React , {useState} from 'react';
import './ExpenseItem.css';

const ExpenseDetails = (props) => {

        const [amount , setAmount]=useState(props.amount);

        const handleAmount = () =>{
            setAmount(100);
        }

    return(
         <div className="expense-item__description">
   
    <div className="expense-item__price">${amount}</div>
    <button onClick={handleAmount}>Change Amount</button>
</div>
);
   

}

export default ExpenseDetails;