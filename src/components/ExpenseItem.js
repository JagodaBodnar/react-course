import Card from './UI/Card'
import "./ExpenseItem.css"
import ExpenseDate from "./NewExpense/ExpenseDate";


const ExpenseItem = ({title,date, amount}) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description"><h2>{title}</h2></div>
            <div className="expense-item__price">${amount}</div>

        </Card>
    )
}
export default ExpenseItem;