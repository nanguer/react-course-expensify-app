import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense actions object', () => {
    const action = removeExpense({ id: '123ccq' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123ccq'
    });
});

test('Should setup edit expense actions object', () => {
    const action = editExpense('123ccq', { description: 'new description' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ccq',
        updates: { description: 'new description' }
    });
});

test('Should setup add expense actions object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', done => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 1500,
        note: 'the previous one got broke',
        createdAt: 1000
    };

    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', done => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store
        .dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });
            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

// test('Should setup add expense actions object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });
