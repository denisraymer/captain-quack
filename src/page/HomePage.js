import React from 'react';
import Management from '../containers/Management';
import Products from '../containers/Products';
import {Footer} from '../components/footer';
import {Header} from '../components/header';
import {Title} from '../components/title';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Title/>
            <Management/>
            <Products/>
            <Footer/>
        </React.Fragment>
    );
};

export default HomePage;
