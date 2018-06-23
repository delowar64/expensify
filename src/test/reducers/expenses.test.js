import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('Should be setup default value', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should be removed an expense', () => {
    const state = expenseReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should be update an expense data', () => {
    const state = expenseReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'NEW DESC'
        }
    })
    expect(state).toEqual([expenses[0], expenses[1], {...expenses[2], description: 'NEW DESC'}])
})


test('Should be add new expense', () => {

    const expense = {
        id: '4',
        description: 'NEW ITEM',
        note: 'BLANK NOTE',
        amount: 200,
        createdAt: 500
    }
    const state = expenseReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })

    expect(state).toEqual([...expenses, expense])
})