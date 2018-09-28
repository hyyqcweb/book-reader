import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.less';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {Icon, message} from 'antd';
import {Details} from '../components'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }
    render() {
        const { DetailList,handleBack, addBook, removeBook, text } = this.props;
        let List = DetailList.toJS();

        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Link to="/search" onClick={handleBack}>
                            <Icon type="arrow-left" theme="outlined"/>
                        </Link>
                        <span className="title">书籍详情</span>
                    </div>
                </div>
                <Details data={List} addBook={addBook} text={text} removeBook={removeBook}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    DetailList: state.getIn(['header','DetailList']),
    text: state.getIn(['header','text'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleBack() {
            dispatch(actionCreators.back())
        },
        addBook(item) {
            dispatch(actionCreators.addBook(item,false));
            message.success('加入书架成功');
        },
        removeBook(item) {
            dispatch(actionCreators.removeBook(item, true));
            message.warning('成功移出书架');
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)