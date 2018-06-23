import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import 'normalize.css'
import './styles/style.scss'


const store = configureStore()

store.dispatch(
    addExpense({
        description: 'Water Bill',
        note: 'Sample Water Bill',
        amount: 4000,
        createdAt: 1529230673598
    })
)
store.dispatch(
    addExpense({
        description: 'Gas Bill',
        note: 'Sample Gas Bill',
        amount: 1500,
        createdAt: 1529230911921
    })
)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))