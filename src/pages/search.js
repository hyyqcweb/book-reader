import React from 'react';
import {Icon, Input, message, Spin} from 'antd';
import './style.less';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { EmptyList, ResuleList } from '../components';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        const { handleSearch, SearchList, handleBack, handleDetail } = this.props;

        let List;
        if (SearchList === null) {
            List = [];
        } else {
            // 解构
            List = SearchList.toJS();
        }
        console.log(List);
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Link to="/" onClick={handleBack}>
                            <Icon type="arrow-left" theme="outlined"/>
                        </Link>
                    </div>
                    <Input.Search
                        placeholder="请输入您查找的书籍名称"
                        onSearch={handleSearch}
                        style={{height: 40, marginTop: 10, padding: '0px 10px'}}
                    />
                </div>
                {/*<Spin className='loading' spinning={false} tip="书籍搜索中...">*/}

                {/*</Spin>*/}
                {List.length ? <div className="content">
                    {List.map((item) => <ResuleList key={item._id} data={item} handleDetail={handleDetail}/>)}
                </div> : <EmptyList data="search"/>}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
     SearchList: state.getIn(['header', 'SearchList'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch(e) {
            if (e === '') {
                message.info('请输入内容!');
                return false;
            } else {
                dispatch(actionCreators.getList(e));
            }
        },
        handleBack() {
            dispatch(actionCreators.back())
        },
        handleDetail(item) {
            dispatch(actionCreators.getDetail(item));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)