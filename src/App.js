import React from 'react';
import Header from './components/header';
import ContentForm from './components/ContentForm/ContentForm';
import ProductList from './components/ProductList/ProductList';
import {Footer} from './components/footer';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <ContentForm/>
            <ProductList/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
