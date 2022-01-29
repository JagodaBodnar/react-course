import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = ({expense, onAddExpense}) => {
    const [newExpense, setNewExpense] = useState(false)
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        onAddExpense(expenseData)
        setNewExpense(false)
    }
    return (
        <div className="new-expense">
            {!newExpense && <button onClick={()=>setNewExpense(true)}> Add New Expense</button>}
            {newExpense &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} items={expense} onAddExpense={setNewExpense}/>}
        </div>
    )
}
export default NewExpense;