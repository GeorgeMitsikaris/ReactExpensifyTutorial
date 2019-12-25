import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({note: 'Rent', description: 'Rent description', amount: 2960, createdAt: 1000}));
store.dispatch(addExpense({note: 'Water Bill', description: 'Water bill description', amount: 290, createdAt: 100}));
store.dispatch(addExpense({note: 'Gas Bill', description: 'Gas bill description', amount: 690, createdAt: 1700}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
