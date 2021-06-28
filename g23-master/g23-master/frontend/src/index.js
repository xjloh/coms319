import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {fetchAuthenticated} from './actions/account';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import SelectedQuestion from './components/SelectedQuestion';

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(fetchAuthenticated())
    .then(()=>{
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact={true} path='/' component={Root}/>
                        <Route path='/question/:id' component={SelectedQuestion}/>
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById("root")
        );
    })
