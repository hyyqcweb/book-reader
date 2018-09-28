import React, {Component} from 'react';
import Header from './header';
import { EmptyList, List } from '../components'
import './style.less';
import {connect} from 'react-redux';

 class App extends Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { HomeList } = this.props;
        let Lists = HomeList.toJS();
        let localList = localStorage.setItem('localList',JSON.stringify(Lists));
        return (
            <div>
                <Header />
                <div className="content">
                    {Lists.length ? <List data={localList}/> : <EmptyList />}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    HomeList: state.getIn(['header', 'HomeList'])
});

export default connect(mapStateToProps, null)(App)