import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const onSubmit = (expense) =>{
        props.dispatch(editExpense(props.match.params.id, expense))
        props.history.push('/')
    }
    return (
        <div>
            <ExpenseForm
                onSubmit={onSubmit}
                id={props.match.params.id}
                expense={props.expense}
                dispatch={props.dispatch}
                history={props.history}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((e) => {
        return e.id === props.match.params.id
    })
})

export default connect(mapStateToProps)(EditExpensePage)