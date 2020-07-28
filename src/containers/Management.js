import React, {Component} from 'react';
import ReduxManagerForm from '../components/managerForm/managerForm';
import {bindActionCreators} from 'redux';
import {createProduct} from '../actions/actionCreateProduct';
import {connect} from 'react-redux';

class Management extends Component {
    eventCreateProduct = (data) => {
        this.props.createProduct('/api/products', data);
    }

    render() {
        return (
            <ReduxManagerForm
                onSubmit={this.eventCreateProduct}
                state={this.state}/>
        )
    }
}

const putActionToProps = (dispatch) => {
    return {
        createProduct: bindActionCreators(createProduct, dispatch)
    };
};

export default connect(null, putActionToProps)(Management);
