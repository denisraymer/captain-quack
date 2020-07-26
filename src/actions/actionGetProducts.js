import axios from 'axios';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

function getProductsSuccess(products = []) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function getProducts(url = '/api/products') {
    return dispatch => {
        return axios.get(`${url}`)
            .then(response => dispatch(getProductsSuccess(response.data)))
            .catch(error => {throw(error)});
    };
}
