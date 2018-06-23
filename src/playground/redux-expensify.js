import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Add Expense
const addExpense = ({
    description = '',
    note = '',
    amount = '',
    createdAt = ''
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// Remove Expense
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Edit Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expense Reducer
const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
             return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}
                }else{
                    return expense
                }
            })
        default: 
            return state
    }
}


//Set filter text
const setTextFilter = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
})

// Sort By Amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// Sort By date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Set Start Date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//Set End Date

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1
        }
    })
}


// Filter Reducer Default State
const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
}

// Filter Reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return { ...state, text: action.text }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state
    }
}

// Store Creation 
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses) 
})

const expense_1 = store.dispatch(
    addExpense({
        description: 'car',
        note: 'Demo 01',
        amount: 435,
        createdAt: 3400
    })
)
const expense_2 = store.dispatch(
    addExpense({
        description: 'resturant',
        note: 'Demo 02',
        amount: 100,
        createdAt: 2000
    })
)
const expense_3 = store.dispatch(
    addExpense({
        description: 'rent',
        note: 'Demo 03',
        amount: 1200,
        createdAt: 5400
    })
)

// store.dispatch(
//     removeExpense({
//         id: expense_2.expense.id
//     })
// )

// store.dispatch(editExpense(expense_3.expense.id, { description: 'New item', amount: 3000 }))
store.dispatch(setTextFilter())
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(3000))
// store.dispatch(setEndDate(5000))
// store.dispatch(setEndDate())


const demoState = {
    expenses: [{
        id: 'poijasd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
