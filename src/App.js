import React from 'react';
import HomePage from './page/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Page404} from './page/404';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route component={Page404}/>
            </Switch>
        </Router>
    );
};

export default App;
