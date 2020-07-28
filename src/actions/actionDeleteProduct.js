import axios from 'axios';

export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';


function deleteProductSuccess(products) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: products
    }
}

export function deleteProduct(url = '') {
    return dispatch => {
        return axios.delete(url)
            .then((response) => dispatch(deleteProductSuccess(response)))
            .catch((error) => error);
    };
}

