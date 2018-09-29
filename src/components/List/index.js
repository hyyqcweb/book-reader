import React from 'react';
import './style.less';
import {ImgUrl} from '../../config';
import Tappable from 'react-tappable/lib/Tappable';

export default ({data, onPress}) => {
    let list = JSON.parse(localStorage.getItem('localList'));
    return (
        <div className="item">
            {list.map((item, index) => {
                const {cover, title, chaptersCount, lastChapter} = item;
                return <Tappable key={index} onPress={() => onPress(data)}>
                    <li>
                        <img src={ImgUrl + cover} alt=""/>
                        <div className="abstract">
                            <h3>{title}</h3>
                            <span>已读: 0 / {chaptersCount}</span>
                            <p>最新: {lastChapter}</p>
                        </div>
                    </li>
                </Tappable>
            })}
        </div>
    )
}