import React from 'react';
import { ImgUrl } from '../../config';
import './style.less';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

export default ( {data, handleDetail} ) => {
    const { cover, author, title, shortIntro, _id:id } = data;
    return(
        <li key={id} className="search-item" onClick={() => handleDetail(data)}>
            <img src={ImgUrl + cover} alt=""/>
            <Link to={ '/detail/' + id }> <p className="title">{title}</p> </Link>
            <p><Icon type="user" theme="outlined" /> {author}</p>
            <p className="desc">{shortIntro}</p>
        </li>
    )
}