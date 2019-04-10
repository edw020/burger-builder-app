import { put, call } from 'redux-saga/effects';

import * as actions from '../actions'
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* logoutSaga(action){
    // Using call makes this saga easier to test.
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action){
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action){
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAm8BwXfF7ZHExcb-gM8uig6H23FbkaK4c';

    if(!action.isSignup)
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAm8BwXfF7ZHExcb-gM8uig6H23FbkaK4c';

    try {
        const {data} = yield axios.post(url, authData);
        const expirationDate = yield new Date(new Date().getTime() + data.expiresIn * 1000);

        yield localStorage.setItem('token', data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', data.localId);

        yield put(actions.authSuccess(data.idToken, data.localId));
        yield put(actions.checkAuthTimeout(data.expiresIn));
    } catch(error){
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga (action) {
    const token = yield localStorage.getItem('token');
    if(!token){
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));

        if(expirationDate > new Date()){
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
        } else
            yield put(actions.logout());
    }
}