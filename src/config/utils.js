import React from 'react';
import './style.less';

export const WordConversion = ({data, wordCount, search}) => {
    let wordage;
    let formula = (wordCount / 10000).toFixed(1) > 1;
    let result = (wordCount / 10000).toFixed(1);

    if (JSON.stringify(data) !== "{}") {
        if (search) {
            if ( formula ) {
                wordage = result + '万';
            } else {
                wordage = wordCount;
            }
        } else {
            if ( formula ) {
                wordage = result + '万字';
            } else {
                wordage = wordCount + '字';
            }
        }

    }

    return (
        <i className={search ? "search" : "desc"}>{wordage}</i>
    )
};