import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
     startAddExpense, 
     addExpense, 
     editExpense, 
     removeExpense, 
     setExpenses, 
     startSetExpenses,
     startRemoveExpense
} from '../../actions/expenses';
import { expenseTwo, expenses } from '../fixtures/expenses';
import database from '../../firebase/firebase';
import expensesReducer from '../../reducers/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
     const expensesData = {};
     expenses.forEach(({id, note, description, amount, createdAt}) => {
          expensesData[id] = {note, description, amount, createdAt}
     })
     database.ref('expenses').set(expensesData).then(() => done());
})

test('should setup remove expense action object', () => {
     const action = removeExpense({id: '123abc'});
     expect(action).toEqual({
          id: '123abc', 
          type: 'REMOVE_EXPENSE'
     })
})

test('should remove expense from firebase', (done) => {
     const store = createMockStore({});
     const id = expenseTwo.id;
     store.dispatch(startRemoveExpense({id})).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
               type: 'REMOVE_EXPENSE',
               id
          })
     })
     return database.ref(`expenses/${id}`).once('value').then((snapshot) => {
          expect(snapshot.val()).toBeFalsy();
          done();
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

test('should setup add expense action object with provided values', () => {    
     const action = addExpense(expenseTwo);
     expect(action).toEqual({
          type: 'ADD_EXPENSE',
          expense: expenseTwo
     });
});

test('should add expense to database and store', (done) => {
     const store = createMockStore({});
     const expenseData = {
          description: 'Mouse',
          amount: 2000,
          note: 'This one is better',
          createdAt: 1000
     }

     store.dispatch(startAddExpense(expenseData)).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: {
                    id: expect.any(String),
                    ...expenseData
               }  
          });

          return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     }).then(snapshot => {
          expect(snapshot.val()).toEqual(expenseData);
          done();  
     });
});

test('should set expenses', () => {
     const action = {
          type: 'SET_EXPENSES',
          expenses: [expenseTwo]
     };
     const state = expensesReducer(expenses, action);
     expect(state).toEqual( [expenseTwo] )
})

test('should fetch the expenses from database', (done) => {
     const store = createMockStore({});
     store.dispatch(startSetExpenses()).then(() => {
          const actions =store.getActions();
          expect(actions[0]).toEqual({
               type: 'SET_EXPENSES',
               expenses
          })
          done();
     })
}) 

test('should setup set expense action object with data', () => {
     const action = setExpenses(expenses);
     expect(action).toEqual({
          type: 'SET_EXPENSES',      
          expenses
     }); 
}) 

test('should add expense with defaults to database and store', () => {
     const store = createMockStore({});

     const expenseData = {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
     }

     store.dispatch(startAddExpense({})).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: expenseData
          })

          return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     }).then(snapshot => {
          expect(snapshot.val()).toEqual(expenseData) 
     })
}); 