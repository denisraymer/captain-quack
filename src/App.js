import React from 'react';
import Header from './components/header';
import {Footer} from './components/footer';
import Products from './containers/Products';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Products/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
