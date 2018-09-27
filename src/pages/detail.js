import React from 'react';
import { connect } from 'react-redux'
import './style.less';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state= {}
    }
    render() {
        const { DetailList,handleBack } = this.props;
        let List = DetailList.toJS();
        console.log(List);
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <Link to="/search" onClick={handleBack}>
                            <Icon type="arrow-left" theme="outlined"/>
                        </Link>
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