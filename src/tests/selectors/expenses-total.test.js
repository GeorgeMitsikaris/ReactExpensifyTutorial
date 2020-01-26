import selectExpensesTotal from "../../selectors/expenses-total";
import {expenses, expenseOne} from "../fixtures/expenses";

test('should return 0 if no expenses', () => {
     const response = selectExpensesTotal([]);
     expect(response).toBe(0);
})

test('should correctly add up a single expense', () => {
     const response = selectExpensesTotal([expenseOne]);
     expect(response).toBe(10);
})

test('should correctly add up multiple expenses', () => {
     const response = selectExpensesTotal([...expenses]);
     expect(response).toBe(1110);
})