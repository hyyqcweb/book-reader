import React from 'react';
import './style.less';

export default ( {data} ) => {
    return (
        <div className="item">
            {data.map( (item, index) => {
                const { avatar, name, chaptersCount, lastChapter } = item;
                return <li key={index}>
                    <img src={avatar} alt=""/>
                    <div className="abstract">
                        <h3>{name}</h3>
                        <span>已读: 0 / {chaptersCount}</span>
                        <p>最新: {lastChapter}</p>
                    </div>
                </li>
            })}
        </div>
    )
}