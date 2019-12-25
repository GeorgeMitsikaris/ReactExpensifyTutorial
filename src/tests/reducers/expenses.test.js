import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import {expenses, expenseOne, expenseTwo, expenseThree} from '../fixtures/expenses';


test('should set the default state', () => {
     const result = expensesReducer(undefined, {type: '@@INIT'});
     expect(result).toEqual([])
})

test('should add expense', () => {
     const expense = {
          id: '3',
          note:'gas', 
          description:'gas description', 
          amount: moment(100), 
          createdAt:100
     }
     const result = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense}); 
     expect(result).toEqual([...expenses, expense]);
})

test('should not remove expense if id was not found', () => {
     const result = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '-1'})
     expect(result).toEqual(expenses);
})

test('should remove expense', () => {
     const result = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '1'})
     expect(result).toEqual([expenseTwo, expenseThree]);
})

test('should not update expense if id not found', () => {
     const result = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '-1', updates: {note: 'test'}})
     expect(result).toEqual(expenses);
})

test('should update expense if id was found', () => {
     const result = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '2', updates: {note: 'test'}})
     expect(result[1].note).toBe('test'); 
})
