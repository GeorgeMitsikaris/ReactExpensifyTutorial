import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses, expenseTwo } from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
     startEditExpense = jest.fn();
     startRemoveExpense = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<EditExpensePage
          startEditExpense = {startEditExpense}
          startRemoveExpense = {startRemoveExpense}
          history = {history}
          expense = {expenseTwo}
     />)
})

test('should render EditExpensePage', () => {
     expect(wrapper).toMatchSnapshot();
})

test('should handle startEditExpense', () => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenseTwo);
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(startEditExpense).toHaveBeenLastCalledWith(expenseTwo.id, expenseTwo);
})

test('should handle startRemoveExpense', () => {
     wrapper.find('button').simulate('click'); 
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenseTwo.id})
}) 