import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {getProducts} from '../actions/actionGetProducts';
import {connect} from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import {deleteProduct} from '../actions/actionDeleteProduct';

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    eventDeleteProduct = (productId) => {
        this.props.deleteProduct(`https://agile-taiga-33505.herokuapp.com/api/products/${productId}`);
    }

    render() {
        const {products} = this.props;
        return (
            <ProductList products={products} eventDeleteProduct={this.eventDeleteProduct}/>
        );
    };
}

const putStateToProps = (state) => {
    return {
        products: state.products
    };
}

const putActionToProps = (dispatch) => {
    return {
        fetchProducts: bindActionCreators(getProducts, dispatch),
        deleteProduct: bindActionCreators(deleteProduct, dispatch)
    };
}

export default connect(putStateToProps, putActionToProps)(Products);
