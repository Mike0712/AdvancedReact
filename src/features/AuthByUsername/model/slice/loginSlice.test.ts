import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'John' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('David'),
        )).toEqual({ username: 'David' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('321'),
        )).toEqual({ password: '321' });
    });
});
