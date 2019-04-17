import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../shared/utility';

const initState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = state => updateObject(state, {purchased: false});
const purchaseBurgerStart = state => updateObject(state, {loading: true});
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    const updatedState = {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    };
    return updateObject(state, updatedState);
};
const purchaseBurgerFail = state => updateObject(state, {loading: false});
const fetchOrdersStart = state => updateObject(state, {loading: true});
const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};
const fetchOrdersFail = state => updateObject(state, {loading: false});

const removeOrderStart = state => updateObject(state, {loading: true});
const removeOrderSuccess = (state, action) => {
    const orders = state.orders.filter(order => order.id !== action.orderId);
    return updateObject(state, {
        loading: false,
        orders
    });
};
const removeOrdersFail = state => updateObject(state, {loading: false});

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state);
        case actionTypes.REMOVE_ORDER_START: return removeOrderStart(state);
        case actionTypes.REMOVE_ORDER_SUCCESS: return removeOrderSuccess(state, action);
        case actionTypes.REMOVE_ORDER_FAIL: return removeOrdersFail(state);
        default: return state;
    }
};

export default reducer;