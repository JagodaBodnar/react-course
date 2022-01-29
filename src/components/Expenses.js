import React, {useState} from 'react';

import Card from './UI/Card';
import './Expenses.css';
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpensesList from "./NewExpense/ExpensesList";

const Expenses = ({items}) => {
    const [selectedYear, setSelectedYear] = useState('')
    const filterYearHandler =year=>{
        setSelectedYear(year)

    }
    const filteredExpenses = items.filter(item=>`${item.date.getFullYear()}`=== selectedYear)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterYear={filterYearHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>

    );
}

export default Expenses;