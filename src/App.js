import React from 'react';
import HomePage from './page/HomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Route path='/' component={HomePage}/>
        </Router>
    );
}

export default App;
