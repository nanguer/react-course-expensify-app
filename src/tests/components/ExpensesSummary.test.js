import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render Expenses Summary component with one expense', () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={1} expensesTotal={240} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expenses Summary component with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={10} expensesTotal={500340} />
    );
    expect(wrapper).toMatchSnapshot();
});
