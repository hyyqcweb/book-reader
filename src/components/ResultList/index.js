import React from 'react';
import {ImgUrl} from '../../config';
import './style.less';
import {Link} from 'react-router-dom';
import { WordConversion } from '../../config/utils'

export default ({data, handleDetail}) => {
    const {cover, author, title, shortIntro, _id: id, latelyFollower, retentionRatio} = data;
    return (
        <li key={id} className="search-item" onClick={() => handleDetail(data)}>
            <img src={ImgUrl + cover} alt=""/>
            <div className="content">
                <Link to={'/detail/' + id}><p className="title">{title}</p></Link>
                <p className="author">{author}</p>
                <p className="desc">{shortIntro}</p>
                <p className="hot"><WordConversion data={data} wordCount={latelyFollower} search={true}/>人气 | <span className="reader">{retentionRatio}%</span>读者留存</p>
            </div>
        </li>
    )
}