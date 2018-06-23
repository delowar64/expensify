import getVisibleExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('Should be filterd by text value', () => {
    const filters = {
        text: 'e'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2]])
})


test('Should be sort by date', () => {
    const filters = {
        sortBy: 'date'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])

})

test('Should be sort by amount', () => {
    const filters = {
        sortBy: 'amount'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])

})

test('Should be filtered by date', () => {
    const filters = {
        startDate: moment(-1).valueOf(),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[2]])
})