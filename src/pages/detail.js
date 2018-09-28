import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.less';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {Icon, Button, Tag} from 'antd';
import {ColorArray, ImgUrl} from '../config'
import {Details} from '../components'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }
    render() {
        const { DetailList,handleBack } = this.props;
        let List = DetailList.toJS();
        console.log(List);

        // let tags;
        // if(JSON.stringify(List) !== "{}") {
        //     tags = List.tags.split(',');
        // }

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
                <Details data={List}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    DetailList: state.getIn(['header','DetailList'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleBack() {
            dispatch(actionCreators.back())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)