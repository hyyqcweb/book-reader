import React from 'react';
import { Icon, Input, message } from 'antd';
import './style.less';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { EmptyList } from '../components';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render() {
        const { handleSearch, SearchList, handleBack } = this.props;
        // 解构
        let List = SearchList.toJS();
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Link to="/" onClick={handleBack} >
                            <Icon type="arrow-left" theme="outlined" />
                        </Link>
                    </div>
                    <Input.Search
                        placeholder="请输入您查找的书籍名称"
                        onSearch={handleSearch}
                        style={{ height:40,marginTop:10,padding:'0px 10px' }}
                    />
                </div>
                {List.length ? <div>
                    {List.map((item, index) => {
                        return <li key={index} className="search-item">
                            {item}
                        </li>
                    })}
                </div> : <EmptyList data="search" />}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        SearchList : state.getIn(['header','SearchList'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch(e) {
            if (e === '') {
                message.info('请输入内容!');
                return false;
            }else {
                dispatch(actionCreators.getList(e))
            }
        },
        handleBack() {
            dispatch(actionCreators.back())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)