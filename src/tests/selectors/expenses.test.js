import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import {expenses, expenseOne, expenseTwo, expenseThree} from '../fixtures/expenses';


test('should filter by text value', () => {
     const filters = {
          text: 'rent',
          sortBy: 'date',
          startDate: undefined,
          endDate: undefined,
     }
     const result = selectExpenses(expenses, filters)
     expect(result).toEqual([expenseOne]); 
})

test('should filter by startDate', () => {     
     const filters = {
          text: '',
          sortBy: 'date',
          startDate: moment(0),
          endDate: undefined,
     }
     const result = selectExpenses(expenses, filters)
     expect(result).toEqual([expenseThree, expenseOne]); 
})

test('should filter by endDate', () => {
     const filters = {
          text: '',
          sortBy: 'date',
          startDate: undefined,
          endDate: moment(0)
     }
     const result = selectExpenses(expenses, filters);
     expect(result).toEqual([expenseOne, expenseTwo]);
})

test('should sort by date', () => {
     const filters = {
          text: '',
          sortBy: 'date',
          startDate: undefined,
          endDate: undefined
     }
     const result = selectExpenses(expenses,filters);
     expect(result).toEqual([expenseThree, expenseOne, expenseTwo]);
})

test('should sort by amount', () => {
     const filters = {
          text: '',
          sortBy: 'amount',
          startDate: undefined,
          endDate: undefined
     }
     const result = selectExpenses(expenses,filters);
     expect(result).toEqual([expenseThree, expenseTwo, expenseOne]);
})