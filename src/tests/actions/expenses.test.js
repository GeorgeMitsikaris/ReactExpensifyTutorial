import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
     const action = removeExpense({id: '123abc'});
     expect(action).toEqual({
          id: '123abc',
          type: 'REMOVE_EXPENSE'
     })
})

test('should setup edit expense action object', () => {
     const action = editExpense('123abc',{ 
          note: 'This is a note for testing',
          amount: 150 
     });
     expect(action).toEqual({
          id: '123abc',
          updates: {
               note: 'This is a note for testing',
               amount: 150
          },
          type: 'EDIT_EXPENSE'
     })
})

test('should setup add expense action object with default values', () => {
     const action = addExpense();
     expect(action).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
               note:'', 
               description:'', 
               amount:0, 
               createdAt:0,
               id: expect.any(String)
     }
     })
})

test('should setup add expense action object with provided values', () => {
     const expenseObject = {
          note: 'test note',
          description: 'test description',
          createdAt: 1000,
          amount: 100
     }
     const action = addExpense(expenseObject);
     expect(action).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
               ...expenseObject,
               id: expect.any(String)
     }
     })
})