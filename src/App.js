import React from 'react';
import Header from './components/header';
import {Footer} from './components/footer';
import Products from './containers/Products';
import Management from './containers/Management';
import ErrorBoundary from './containers/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <Header/>
            <Management/>
            <Products/>
            <Footer/>
        </ErrorBoundary>
    )
}

export default App;
