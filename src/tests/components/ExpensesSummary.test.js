import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render correctly ExpensesSummary with one expense', () => {
     const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={23}/>);
     expect(wrapper).toMatchSnapshot();
})

test('should render correctly ExpensesSummary with multiple expenses', () => {
     const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={235}/>);
     expect(wrapper).toMatchSnapshot();
})