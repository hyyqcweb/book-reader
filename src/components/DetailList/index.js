import React, {Component} from 'react';
import {ColorArray, ImgUrl} from '../../config'
import {Button, Tag} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style.less';
import { WordConversion } from '../../config/utils'

export default ({data, addBook, removeBook, text}) => {
    const {cover, title, author, cat, wordCount, updated, latelyFollower, retentionRatio, serializeWordCount, tags, longIntro} = data;

    return (
        <div className="detailContent">
            <div className="title">
                <img src={ImgUrl + cover} alt=""/>
                <p>
                    <span>{title}</span>
                    <span className="desc"><em>{author}</em> | {cat} | <WordConversion data={data} wordCount={wordCount}/></span>
                    <span className="hot">更新: {moment(updated, 'YYYYMMDD').fromNow()} </span>
                </p>
            </div>
            <div className="nav">
                {text ?
                    <Button className="button plus" type="danger" icon="plus" onClick={() => addBook(data)}>追更新</Button> :
                    <Button className="button minus"  type="danger" icon="minus" onClick={() => removeBook(data)}>不追了</Button>
                }
                <Button className="button plus" type="danger" icon="search">开始阅读</Button>
            </div>
            <div className="words">
                <p>
                    <dd className="profile">追书人数</dd>
                    {latelyFollower}
                </p>
                <p>
                    <dd className="profile">读者留存率</dd>
                    {retentionRatio}%
                </p>
                <p>
                    <dd className="profile">日更新字数</dd>
                    {serializeWordCount}
                </p>
            </div>
            <div className="tags">
                {tags ? tags.map((item, index) => {
                    return <Tag key={index}
                                color={ColorArray[Math.ceil(Math.random() * ColorArray.length - 1)]}>{item}</Tag>
                }) : ""}
            </div>
            <div className="abstract">
                {longIntro}
            </div>
        </div>
    )
}