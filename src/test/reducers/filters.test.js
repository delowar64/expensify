import filterReducer from '../../reducers/filters'
import moment from 'moment'

const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('Should be setup default value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(defaultState)
    
})

test('Should be setup sortBy to date', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_DATE'})
    expect(state).toEqual({...defaultState, sortBy: 'date'})
})

test('Should be setup sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state).toEqual({...defaultState, sortBy: 'amount'})
})


test('Should be setup text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_FILTER_TEXT', text: 'Dummy Text' })
    expect(state).toEqual({...defaultState, text: 'Dummy Text'})
})

test('Should be setup startDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).valueOf(0) })
    expect(state).toEqual({...defaultState, startDate: moment(0).valueOf()})
})

test('Should be setup startDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).valueOf(0) })
    expect(state).toEqual({...defaultState, endDate: moment(0).valueOf()})
})