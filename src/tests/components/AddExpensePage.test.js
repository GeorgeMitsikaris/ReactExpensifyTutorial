import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenseTwo } from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
     onSubmit = jest.fn();
     history = {push: jest.fn()};
     wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
})

test('should render AddExpensePage correctly', () => {     
     expect(wrapper).toMatchSnapshot();
})

test('should handle submit', () => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenseTwo);
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(onSubmit).toHaveBeenLastCalledWith(expenseTwo);
})