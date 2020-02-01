import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses, expenseTwo } from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
     editExpense = jest.fn();
     startRemoveExpense = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<EditExpensePage
          editExpense = {editExpense}
          startRemoveExpense = {startRemoveExpense}
          history = {history}
          expense = {expenseTwo}
     />)
})

test('should render EditExpensePage', () => {
     expect(wrapper).toMatchSnapshot();
})

test('should handle editExense', () => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenseTwo);
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(editExpense).toHaveBeenLastCalledWith(expenseTwo.id, expenseTwo);
})

test('should handle startRemoveExpense', () => {
     wrapper.find('button').simulate('click'); 
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenseTwo.id})
})