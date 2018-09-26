import React from 'react';
import Header from './header';
import { EmptyList, List } from '../components'
import './style.less'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <Header />
                <div className="content">
                    {this.state.list.length ? <List data={list}/> : <EmptyList />}
                </div>
            </div>
        )
    }
}