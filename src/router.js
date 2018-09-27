import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages';
import Search from './pages/search'
import Detail from './pages/detail'

export default () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/search' exact component={Search} />
                    <Route path='/detail/:id' exact component={Detail} />
                </div>
            </BrowserRouter>
        </Provider>
    )
}