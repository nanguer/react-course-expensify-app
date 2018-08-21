import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should set text filter action object with data provided', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    });
});

test('Should set text filter action object with default data', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.any(String)
    });
});

test('Should set sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should set sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
