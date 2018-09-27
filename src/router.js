import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages';
import Search from './pages/search'

export default () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/search' exact component={Search} />
                </div>
            </BrowserRouter>
        </Provider>
    )
}