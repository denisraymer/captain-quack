import React from 'react';
import Management from '../containers/Management';
import Products from '../containers/Products';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Management/>
            <Products/>
            <Footer/>
        </React.Fragment>
    );
};

export default HomePage;
