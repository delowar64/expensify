import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('Should be set a text filter', () => {
    const actions = setTextFilter('simple filter')
    expect(actions).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'simple filter'
    })
})

test('Should be set shortBy = amount', () => {
    const actions = sortByAmount()
    expect(actions).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should be set shortBy = date', () => {
    const actions = sortByDate()
    expect(actions).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should be set startDate', () => {
    const startDate = moment().startOf('month')
    const actions = setStartDate(startDate)
    expect(actions).toEqual({
        type: 'SET_START_DATE',
        startDate
    })
})

test('Should be set endDate', () => {
    const endDate = moment().endOf('month')
    const actions = setEndDate(endDate)
    expect(actions).toEqual({
        type: 'SET_END_DATE',
        endDate
    })
})