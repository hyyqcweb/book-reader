import React, {Component} from 'react';
import Header from './header';
import {EmptyList, List} from '../components'
import './style.less';
import {connect} from 'react-redux';
import { Modal } from 'antd';
import {actionCreators} from './store';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {HomeList} = this.props;
        let Lists = HomeList.toJS();
        let localList = localStorage.setItem('localList', JSON.stringify(Lists));
        return (
            <div>
                <Header/>
                <div className="content">
                    {Lists.length ? <List data={localList} onPress={() => this.showModal()}/> : <EmptyList/>}
                </div>
                <Modal
                    title="删除操作"
                    centered
                    visible={this.state.visible}
                    onOk={(item) => {
                        this.props.deleteBook(item);
                        this.hideModal()
                    }}
                    onCancel={this.hideModal}
                    okText="想好了"
                    cancelText="再想想"
                >
                    <p>确定要删除本书吗?</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    HomeList: state.getIn(['header', 'HomeList'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook(item) {
            dispatch(actionCreators.removeBook(item, true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)