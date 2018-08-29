import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startaddExpense, history, wrapper;

beforeEach(() => {
    startaddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AddExpensePage startaddExpense={startaddExpense} history={history} />
    );
});

test('should render startaddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startaddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
