import React from 'react';
import {Icon} from 'antd';
import './style.less';
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div className="header">
            <div className="bar">
                <Icon type="bars" theme="outlined"/>
            </div>
            <div className="logo">
                <Link to="/">追书神器</Link>
            </div>
            <div className="search">
                <Link to="/search">
                    <Icon type="search" theme="outlined"/>
                </Link>
            </div>
        </div>
    )
}