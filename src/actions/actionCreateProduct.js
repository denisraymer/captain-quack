import axios from 'axios';

export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';


function createProductSuccess(products) {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        payload: products
    }
}

export function createProduct(url = '/api/products', product) {
    return dispatch => {
        return axios.post(url, product)
            .then((response) => dispatch(createProductSuccess(response.data)))
            .catch((error) => error);
    };
}
