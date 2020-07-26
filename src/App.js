import React from 'react';
import Header from './components/header';
import {Footer} from './components/footer';
import Products from './containers/Products';
import Management from './containers/Management';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Management/>
            <Products/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
