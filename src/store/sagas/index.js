import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

// Listeners for 'auth' actions
export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ]);
}

// Listener for 'burgerBuilder' action
export function* watchBurgerBuilder(){
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

// Listeners for 'order' actions
export function* watchOrder(){
    yield all([
        takeEvery(actionTypes.PURCHASE_BURGER_INIT, purchaseBurgerSaga),
        takeEvery(actionTypes.FETCH_ORDERS_INIT, fetchOrdersSaga)
    ]);
}