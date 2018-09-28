import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.less';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {Icon, Button, Tag} from 'antd';
import {ColorArray} from '../config'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }
    render() {
        const { DetailList,handleBack } = this.props;
        let List = DetailList.toJS();
        let tags;
        if(JSON.stringify(List) !== "{}") {
            tags = List.tags.split(',');
        }
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
                <div className="detailContent">
                    <div className="title">
                        <img src={List.cover} alt=""/>
                        <p>
                            <span>{List.title}</span>
                            <span className="desc"><em>{List.author}</em> | {List.category} | {List.words}</span>
                            <span className="hot">来源: {List.host}</span>
                        </p>
                    </div>
                    <div className="nav">
                        <Button className="button" type="danger" icon="plus" >追更新</Button>
                        <Button className="button" type="danger" icon="search">开始阅读</Button>
                    </div>
                    <div className="words">
                        <p>
                            <span>追书人数</span> <br/>
                            {List.formats}
                        </p>
                    </div>
                    <div className="tags">
                        {tags !== undefined ? tags.map((item,index) => {
                            return <Tag key={index} color={ColorArray[Math.ceil(Math.random() * ColorArray.length-1)]}>{item}</Tag>
                        }) : ""}
                    </div>
                    <div className="abstract">
                        {List.desc}
                    </div>
                </div>
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