import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
