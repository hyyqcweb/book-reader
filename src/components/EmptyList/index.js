import React from 'react';
import './style.less';

export default ( {data} ) => {

    return (
        <div className="container">
            {data ? '暂无搜索结果' : '书架空空如也,快去添加书籍吧'}
        </div>
    )
}