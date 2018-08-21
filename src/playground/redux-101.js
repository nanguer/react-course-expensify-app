import { createStore } from 'redux';

// Action generators - functions that returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy // shorthand for incrementBy: 'incrementBy'
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. are pure functions.
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };

    case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
    case 'RESET':
        return {
            count: 0
        };

    case 'SET':
        return {
            count: action.count
        };

    default:
        return state;
    }
};

const store = createStore(countReducer);

// Actions - it's an object sent to the store to modify.

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -103 }));
