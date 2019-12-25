import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { expenses, expenseOne, expenseTwo, expenseThree } from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
     const wrapper = shallow(<ExpenseForm/>);
     expect(wrapper).toMatchSnapshot(); 
})

test('should render ExpenseForm with expense data', () => {
     const wrapper = shallow(<ExpenseForm expense = { expenseOne }/>); 
     expect(wrapper).toMatchSnapshot();  
})

test('should render error for invalid form submission', () => {
     const wrapper = shallow(<ExpenseForm />);
     expect(wrapper).toMatchSnapshot();
     wrapper.find('form').simulate('submit', {preventDefault: () => {}});
     expect(wrapper.state('error').length).toBeGreaterThan(0);
     expect(wrapper).toMatchSnapshot();     
})

test('should set description on input change', () => {
     const value = 'Test description';
     const wrapper = shallow(<ExpenseForm/>);
     wrapper.find('input').at(0).simulate('change', {
          target: {value}
     });
     expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
     const value = 'Test note'
     const wrapper = shallow(<ExpenseForm/>);
     wrapper.find('textarea').simulate('change', {
          target: {value}
     });
     expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
     const value = '12.34';
     const wrapper = shallow(<ExpenseForm/>);
     wrapper.find('input').at(1).simulate('change', {
          target: {
               value
          }
     })
     expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
     const value = '12.345';
     const wrapper = shallow(<ExpenseForm/>);
     wrapper.find('input').at(1).simulate('change', {
          target: {
               value
          }
     })
     expect(wrapper.state('amount')).toBe(''); 
})

test('should call onSubmit prop for valid form submission', () => {
     const onSubmitSpy = jest.fn();
     const wrapper = shallow(<ExpenseForm expense={expenseOne} onSubmit={onSubmitSpy} />)
     wrapper.find('form').simulate('submit', {preventDefault: ()=>{}});
     expect(wrapper.state('error')).toBe('');
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
          description: expenseOne.description,
          amount: expenseOne.amount,
          note: expenseOne.note,
          createdAt: expenseOne.createdAt
     }) 
})

test('should set new date on date change', () => {
     const now = moment();
     const wrapper = shallow(<ExpenseForm/>)
     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
     expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change', () => {
     const wrapper = shallow(<ExpenseForm/>);
     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
     expect(wrapper.state('calendarFocused')).toBe(true); 
})