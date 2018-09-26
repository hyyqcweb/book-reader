import React from 'react';
import {Icon} from 'antd';
import './style.less';

export default () => {
    return (
        <div className="header">
            <div className="bar">
                <Icon type="bars" theme="outlined" />
            </div>
            <div className="logo">
                追书神器
            </div>
            <div className="search">
                <Icon type="search" theme="outlined" />
            </div>
        </div>
    )
}