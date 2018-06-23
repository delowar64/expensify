import React from 'react'
import { removeExpense } from '../actions/expenses'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`edit/${id}`}>
            <h4>{description}</h4>
        </Link>
        <p>Amount: {amount}</p>
        <p>Created At: {moment(createdAt).format('llll')}</p>
    </div>
)

export default connect()(ExpenseListItem)