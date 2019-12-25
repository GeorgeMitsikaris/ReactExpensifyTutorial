import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import {expenses, expenseOne, expenseTwo, expenseThree} from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
     const wrapper = shallow(<ExpenseList expenses = { expenses }/>);
     expect(wrapper).toMatchSnapshot(); 
})

test('should render ExpenseList with out expenses', () => {
     const wrapper = shallow(<ExpenseList expenses = { [] }/>); 
     expect(wrapper).toMatchSnapshot(); 
})