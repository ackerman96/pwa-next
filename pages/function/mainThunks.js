import { ENV } from '../env/env.config';
import * as api from '../api/api.util';
import { result } from 'lodash';

export function register() {
    return (dispatch, getState) => {
        const state = getState();
        const username = result(state, 'form.RegisterForm.values.username', '');
        const password = result(state, 'form.RegisterForm.values.password', '');
        const email = result(state, 'form.RegisterForm.values.email', '');
        const payload = { email, username, password }
        console.log('payload', payload);
        return api.register(payload).then((res) => {
            console.log(res);
            return res;
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function login(payload) {
    return (dispatch, getState) => {
    return api.login(payload).then((res) => {
        console.log(res);
        return res;
    });
}
}

