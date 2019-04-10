import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';
import * as actions from '../actions'

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());

    try{
        const {data} = yield axios.post('/orders.json?auth='+action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(data.name, action.orderData));
    } catch(error){
        yield put(actions.purchaseBurgerFail(error));
    }
}

export function* fetchOrdersSaga(action) {
    yield put(actions.fetchOrdersStart());

    const queryParams = yield '?auth='+action.token+'&orderBy="userId"&equalTo="'+action.userId+'"';
    try{
        const {data} = yield axios.get('/orders.json'+queryParams);
        const fetchedOrders = yield Object.keys(data || {}).map(key => {return {...data[key], id: key}});
        yield put(actions.fetchOrdersSuccess(fetchedOrders));

    } catch(error){
        yield put(actions.fetchOrdersFail(error));
    }
}