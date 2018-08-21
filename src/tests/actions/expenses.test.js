import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense actions object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
