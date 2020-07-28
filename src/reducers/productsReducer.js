import {GET_PRODUCTS_SUCCESS} from '../actions/actionGetProducts';
import {CREATE_PRODUCT_SUCCESS} from '../actions/actionCreateProduct';
import {DELETE_PRODUCT_SUCCESS} from '../actions/actionDeleteProduct';

export function productsReducer(state = [], action) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return [...state, ...action.payload];
        case CREATE_PRODUCT_SUCCESS:
            return [...state, action.payload];
        case DELETE_PRODUCT_SUCCESS:
            let productId = action.payload.config.url.replace('/api/products/', '');
            return state.filter(product => product._id !== productId)
        default:
            return state;
    }
}
