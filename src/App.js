import React from 'react';
import Header from './components/header';
import ContentForm from './components/ContentForm/ContentForm';
import ProductList from './components/ProductList/ProductList';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <ContentForm/>
            <ProductList/>
        </React.Fragment>
    );
}

export default App;
