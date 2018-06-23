import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

test('Should setup removeExpense action object', () => {
    const actions = removeExpense({id: 'abc123'})
    expect(actions).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })

})

test('Should setup editExpense action object', () => {
    const updates = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const actions = editExpense('abc123', updates)

    expect(actions).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates
    })

})

test('Should setup addExpense action object', () => {
    const expense = {
        id: '',
        description: '',
        note: '',
        amount: '',
        createdAt: ''
    }
    const action = addExpense(expense)
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    })


})