import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
// should sort by date
test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});
// should sort by amount
test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});
// should handle date changes (spies)
test('should handle date changes', () => {
    const startDate = moment(0).add(2, 'years');
    const endDate = moment(0).add(4, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus change (state)
test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
