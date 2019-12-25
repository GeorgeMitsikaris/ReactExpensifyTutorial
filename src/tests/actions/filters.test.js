import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, shortByAmount, shortByDate} from '../../actions/filters';

test('should create text filter object with provided values', () => {
     const action = setTextFilter('abc');
     expect(action).toEqual({
          type: 'SET_TEXT_FILTER',
          text: 'abc'
     })
})

test('should create text filter object with default values', () => {
     const action = setTextFilter('');
     expect(action).toEqual({
          type: 'SET_TEXT_FILTER',
          text: ''
     })
})

test('should create start date action object', () => {
     const action = setStartDate(moment(1000));
     expect(action).toEqual({
          type: 'SET_START_DATE',
          date: moment(1000)
     })
})

test('should create end date action object', () => {
     const action = setEndDate(moment(1000));
     expect(action).toEqual({
          type: 'SET_END_DATE',
          date: moment(1000)
     })
})

test('should create short by amount action object', () => {
     const action = shortByAmount();
     expect(action).toEqual({
          type: 'SHORT_BY_AMOUNT'
     })
})

test('should create short by date action object', () => {
     const action = shortByDate();
     expect(action).toEqual({
          type: 'SHORT_BY_DATE'
     })
})