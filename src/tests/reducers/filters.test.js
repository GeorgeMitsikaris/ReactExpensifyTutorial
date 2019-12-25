import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default state values', () => {
     const result = filtersReducer(undefined, {type: '@@INIT'})
     expect(result).toEqual({
          text: '',
          sortBy: 'date',
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month')
     })
})

test('should sort by amount', () => {
     const result = filtersReducer(undefined, {type: 'SHORT_BY_AMOUNT'});
     expect(result.sortBy).toBe('amount')
})

test('should sort by date', () => {
     const state={
          text: '',
          sortBy: 'amount',
          startDate: undefined,
          endDate: undefined
     }
     const result = filtersReducer(state, {type: 'SHORT_BY_DATE'});
     expect(result.sortBy).toBe('date')
})

test('should set text filter', () => {
     const result = filtersReducer(undefined, {
          type: 'SET_TEXT_FILTER',
          text: 'abc'});
          expect(result.text).toBe('abc')
})

test('should set start date', () => {
     const result = filtersReducer(undefined, {
          type: 'SET_START_DATE',
          date: moment(1)}); 
          expect(result.startDate).toEqual(moment(1));
})
test('should set end date', () => {
     const result = filtersReducer(undefined, {
          type: 'SET_END_DATE',
          date: moment(1)});
          expect(result.endDate).toEqual(moment(1));
})