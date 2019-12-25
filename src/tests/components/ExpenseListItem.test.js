import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import { expenseOne } from '../fixtures/expenses';

test('should render ExpenseListItem' , () => {
     const wrapper = shallow(<ExpenseListItem {...expenseOne}/>)
     expect(wrapper).toMatchSnapshot();
})