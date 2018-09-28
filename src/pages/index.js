import React, {Component} from 'react';
import Header from './header';
import { EmptyList, List } from '../components'
import './style.less'

export default class App extends Component{
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