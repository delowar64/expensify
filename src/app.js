import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import 'normalize.css'
import './styles/style.scss'
import './firebase/firebase'


const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))