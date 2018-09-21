import authReducer from '../../reducers/auth';

test('Should set logged in state', () => {
    const action = {
        type: 'LOGIN',
        uid: 'randomString'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should set logged out state', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'randomString' }, action);
    expect(state.uid).toEqual(undefined);
});
