import React from 'react'
import moment from 'moment'
import InputMoment from 'input-moment'
import 'input-moment/dist/input-moment.css'
import { removeExpense } from '../actions/expenses';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            showDatePicker: false,
            error: ''
        }
    }

    descriptionOnChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    amountOnChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    noteOnChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    momentOnChange = (createdAt) => {
        this.setState({createdAt})
    }

    handleSave = () => {
        this.setState({showDatePicker: !this.state.showDatePicker})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState({error: 'Description or Amount cannot be empty'})
        } else {
            this.setState({error: ''})
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.descriptionOnChange}
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.amountOnChange}
                    />
                    <input
                        type="text"
                        value={this.state.createdAt.format('llll')}
                        readOnly
                        onClick={this.handleSave}
                    />

                    {this.state.showDatePicker && <InputMoment
                        moment={this.state.createdAt}
                        onChange={this.momentOnChange}
                        minStep={5}
                        onSave={this.handleSave}
                    />}
                    <textarea
                        placeholder="Note (optional)"
                        value={this.state.note}
                        onChange={this.noteOnChange}
                    ></textarea>
                    <button> {this.props.expense ? 'Update' : 'Add'} Expense </button>
                </form>
                {this.props.expense && <button
                    onClick={() => {
                        const id = this.props.expense.id
                        this.props.dispatch(removeExpense({ id }))
                        this.props.history.push('/')
                    }}
                >Remove Expense</button>}
            </div>
        )
    }
}