import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        {props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))}
    </div>
) 

const mapStateProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateProps)(ExpenseList)