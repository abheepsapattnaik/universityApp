import rootReducer from './rootReducer';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {intercept} from './interceptMiddleware';

export default function configStore() {
    let storeEnhancer = undefined;
    if (process.env.NODE_ENV !== 'PRODUCTION') {
        storeEnhancer = composeWithDevTools(
            applyMiddleware(
                createLogger({collapsed: true}),
                intercept
            ))
    }

    return createStore(rootReducer, storeEnhancer);
}
